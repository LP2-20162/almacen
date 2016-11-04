app
// =========================================================================
// Show View and Delete Autor 
// =========================================================================
    .controller("DetalleOsCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'nombre';
    var params = {};
    $scope.lista = [];
    $scope.detalleOs = {};

    $scope.list = function(params) {
        $scope.isLoading = true;
        repositorioService.DetalleOs.query(params, function(r) {
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
            repositorioService.DetalleOs.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó detalleOs:" + JSON.stringify(d));
                toastr.success('Se eliminó detalleOs ' + d.nombre, 'DetalleOs');
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
.controller("DetalleOsSaveCtrl", function($scope, $state, $stateParams, repositorioService, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.detalleOs = {};

    $scope.sel = function() {
        repositorioService.DetalleOs.get({ id: $stateParams.id }, function(r) {
            $scope.detalleOs = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.detalleOs.id) {
            repositorioService.DetalleOs.update({ id: $scope.detalleOs.id }, $scope.detalleOs, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó detalleOs ' + r.nombre, 'DetalleOs');
                $state.go('repositorio.repositorio.detalleOses');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            repositorioService.DetalleOs.save($scope.detalleOs, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó detalleOs ' + r.nombre, 'DetalleOs');
                $state.go('repositorio.repositorio.detalleOses');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('repositorio.repositorio.detalleOses');


        
    };
});
