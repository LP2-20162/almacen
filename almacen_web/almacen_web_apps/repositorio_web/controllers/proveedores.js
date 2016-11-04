app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("ProveedorCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.proveedor = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Proveedor.query(params, function(r) {
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
            repositorioService.Proveedor.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la proveedor:" + JSON.stringify(d));
                toastr.success('Se eliminó la proveedor ' + d.nombre, 'Proveedor');
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
.controller("ProveedorSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.proveedor = {};

    $scope.sel = function() {
        repositorioService.Proveedor.get({ id: $stateParams.id }, function(r) {
            $scope.proveedor = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.proveedor.id) {
            repositorioService.Proveedor.update({ id: $scope.proveedor.id }, $scope.proveedor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la proveedor ' + r.nombre, 'Proveedor');
                $state.go('repositorio.repositorio.proveedores');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Proveedor.save($scope.proveedor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la proveedor ' + r.nombre, 'Proveedor');
                $state.go('repositorio.repositorio.proveedores');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.proveedores');
    };
});
