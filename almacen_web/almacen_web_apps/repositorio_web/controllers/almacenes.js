app
// =========================================================================
// Show View and Delete Almacen 
// =========================================================================
    .controller("AlmacenCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.almacen = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Almacen.query(params, function(r) {
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
            repositorioService.Almacen.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó almacen:" + JSON.stringify(d));
                toastr.success('Se eliminó almacen ' + d.nombre, 'Almacen');
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
.controller("AlmacenSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.almacen = {};

    $scope.sel = function() {
        repositorioService.Almacen.get({ id: $stateParams.id }, function(r) {
            $scope.almacen = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.almacen.id) {
            repositorioService.Almacen.update({ id: $scope.almacen.id }, $scope.almacen, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó almacen ' + r.nombre, 'Almacen');
                $state.go('repositorio.repositorio.almacenes');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Almacen.save($scope.almacen, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó almacen ' + r.nombre, 'Almacen');
                $state.go('repositorio.repositorio.almacenes');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.almacenes');


        
    };
});
