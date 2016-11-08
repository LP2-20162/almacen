app
// =========================================================================
// Show View and Delete Autor 
// =========================================================================
    .controller("CompraCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.compra = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Compra.query(params, function(r) {
            $scope.lista = r;
           // $scope.options = r.options;
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
            repositorioService.Compra.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó compra:" + JSON.stringify(d));
                toastr.success('Se eliminó compra ' + d.nombre, 'Compra');
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
.controller("CompraSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.compra = {};

    $scope.sel = function() {
        repositorioService.Compra.get({ id: $stateParams.id }, function(r) {
            $scope.compra = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.compra.id) {
            repositorioService.Compra.update({ id: $scope.compra.id }, $scope.compra, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó compra ' + r.nombre, 'Compra');
                $state.go('repositorio.repositorio.compras');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Compra.save($scope.compra, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó compra ' + r.nombre, 'Compra');
                $state.go('repositorio.repositorio.compras');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.compras');


        
    };
});
