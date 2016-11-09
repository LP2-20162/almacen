app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("OrdenSalidaCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'baseImponible';
    var params = {};
    $scope.lista = [];
    $scope.ordenSalida = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.OrdenSalida.query(params, function(r) {
            $scope.lista = r;
            //$scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            repositorioService.OrdenSalida.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la ordenSalida:" + JSON.stringify(d));
                toastr.success('Se eliminó la ordenSalida ' + d.baseImponible, 'OrdenSalida');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Categoria
// =========================================================================
.controller("OrdenSalidaSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.ordenSalida = {};

    $scope.sel = function() {
        repositorioService.OrdenSalida.get({ id: $stateParams.id }, function(r) {
            $scope.ordenSalida = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.ordenSalida.id) {
            repositorioService.OrdenSalida.update({ id: $scope.ordenSalida.id }, $scope.ordenSalida, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la ordenSalida ' + r.baseImponible, 'OrdenSalida');
                $state.go('repositorio.repositorio.ordenSalidas');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.OrdenSalida.save($scope.ordenSalida, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la ordenSalida ' + r.baseImponible, 'OrdenSalida');
                $state.go('repositorio.repositorio.ordenSalidas');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.ordenSalidas');
    };
});
