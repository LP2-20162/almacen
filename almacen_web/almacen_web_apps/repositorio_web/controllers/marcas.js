app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("MarcaCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.marca = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Marca.query(params, function(r) {
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
            repositorioService.Marca.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la marca:" + JSON.stringify(d));
                toastr.success('Se eliminó la marca ' + d.nombre, 'Marca');
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
.controller("MarcaSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.marca = {};

    $scope.sel = function() {
        repositorioService.Marca.get({ id: $stateParams.id }, function(r) {
            $scope.marca = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.marca.id) {
            repositorioService.Marca.update({ id: $scope.marca.id }, $scope.marca, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la marca ' + r.nombre, 'Marca');
                $state.go('repositorio.repositorio.marcas');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Marca.save($scope.marca, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la marca ' + r.nombre, 'Marca');
                $state.go('repositorio.repositorio.marcas');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.marcas');
    };
});
