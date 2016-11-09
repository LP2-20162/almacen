app
// =========================================================================
// Show View and Delete Categoria 
// =========================================================================
    .controller("CategoriaCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.categoria = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.Categoria.query(params, function(r) {
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
            repositorioService.Categoria.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la categoría:" + JSON.stringify(d));
                toastr.success('Se eliminó la categoría ' + d.nombre, 'Categoria');
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
.controller("CategoriaSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.categoria = {};

    $scope.sel = function() {
        repositorioService.Categoria.get({ id: $stateParams.id }, function(r) {
            $scope.categoria = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.categoria.id) {
            repositorioService.Categoria.update({ id: $scope.categoria.id }, $scope.categoria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la categoría ' + r.nombre, 'Categoria');
                $state.go('repositorio.repositorio.categorias');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.Categoria.save($scope.categoria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la categoría ' + r.nombre, 'Categoria');
                $state.go('repositorio.repositorio.categorias');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.categorias');
    };
});
