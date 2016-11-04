app
// =========================================================================
// Show View and Delete Autor 
// =========================================================================
    .controller("FarmaciaCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.farmacia = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Farmacia.query(params, function(r) {
            $scope.lista = r.results;
            $scope.options = r.options;
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
            repositorioService.Farmacia.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó farmacia:" + JSON.stringify(d));
                toastr.success('Se eliminó farmacia ' + d.nombre, 'Farmacia');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Autor
// =========================================================================
.controller("FarmaciaSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.farmacia = {};

    $scope.sel = function() {
        repositorioService.Farmacia.get({ id: $stateParams.id }, function(r) {
            $scope.farmacia = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.farmacia.id) {
            repositorioService.Farmacia.update({ id: $scope.farmacia.id }, $scope.farmacia, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó farmacia ' + r.nombre, 'Farmacia');
                $state.go('repositorio.repositorio.farmacias');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Farmacia.save($scope.farmacia, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó farmacia ' + r.nombre, 'Farmacia');
                $state.go('repositorio.repositorio.farmacias');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.farmacias');


        
    };
});
