app

    .factory("repositorioService", function($resource, configRepositorio) {
    var url = configRepositorio.repositorioUrl;
    return {

        Almacen: $resource(url + "almacenes/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },



        }),
        Categoria: $resource(url + "categorias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },


        }), 
        Compra: $resource(url + "compras/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },


        }),        
        DetalleCompra: $resource(url + "detalleCompras/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },



        }),        
        DetalleOs: $resource(url + "detalleOses/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },



        }),        
        Farmacia: $resource(url + "farmacias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),            
        Marca: $resource(url + "marcas/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },



        }),        
        OrdenSalida: $resource(url + "ordenSalidas/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },



        }),        
        Producto: $resource(url + "productos/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },



        }),        
        Proveedor: $resource(url + "proveedores/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },


        }),
        Autor: $resource(url + "compras/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            "query": {
                method: 'GET',
                isArray: false,
                transformResponse: function(r) {
                    var results = [];
                    var options = {};
                    results = angular.fromJson(r).results ? angular.fromJson(r).results : angular.fromJson(r);
                    options = angular.fromJson(r).options ? angular.fromJson(r).options : {
                        "count": 1,
                        "pages": 1,
                        "page": 1,
                        "range": "all",
                        "previous": null,
                        "page_size": 1,
                        "next": null
                    };
                    return { results: results, options: options };
                }
            }

        }),


    };
});
