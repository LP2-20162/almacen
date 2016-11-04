app
// =========================================================================
// Show View and Delete Autor 
// =========================================================================
    .controller("DetalleCompraCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.detalleCompra = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.DetalleCompra.query(params, function(r) {
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
            repositorioService.DetalleCompra.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó detalleCompra:" + JSON.stringify(d));
                toastr.success('Se eliminó detalleCompra ' + d.nombre, 'DetalleCompra');
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
.controller("DetalleCompraSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.detalleCompra = {};

    $scope.sel = function() {
        repositorioService.DetalleCompra.get({ id: $stateParams.id }, function(r) {
            $scope.detalleCompra = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.detalleCompra.id) {
            repositorioService.DetalleCompra.update({ id: $scope.detalleCompra.id }, $scope.detalleCompra, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó detalleCompra ' + r.nombre, 'DetalleCompra');
                $state.go('repositorio.repositorio.detalleCompras');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.DetalleCompra.save($scope.detalleCompra, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó detalleCompra ' + r.nombre, 'DetalleCompra');
                $state.go('repositorio.repositorio.detalleCompras');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.detalleCompras');


        
    };
});
