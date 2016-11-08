var baseUrl = 'http://localhost:9000/';
var loginUrl = 'http://localhost:9001/auth_web/';


var config = {
    baseUrl: baseUrl,
    loginUrl: loginUrl,
};

app.value('config', config);

app
    .config(function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.interceptors.push('authInterceptorService');
    })

.run(function($rootScope, $state, $stateParams, $window, authService) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    /*******************************agregado**************************/
    //console.log("run");

    authService.fillAuthData();
    if (authService.authentication.isAuth === false) {
        $window.location = loginUrl;
    }
    /******************************************************************/

})


.config(function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
})

/*
angular.module('app').config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('YYYY-MM-DD');
    };
});

*/
.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.shortDays = [
        'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'
    ];

    $mdDateLocaleProvider.formatDate = function(date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day + '/' + (monthIndex + 1) + '/' + year;
    };
})

.config(
    function($mdIconProvider, $$mdSvgRegistry) {
        // Add default icons from angular material para versiones no estables mayores a v1.0.9
        // la version v1.0.9 no necesita hacer esto
        $mdIconProvider
            .icon('md-close', $$mdSvgRegistry.mdClose)
            .icon('md-menu', $$mdSvgRegistry.mdMenu)
            .icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);
    }
);



app.constant('ROUTERS_T', [{
    "estado.nombre.1": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    }

}, {
    "estado.nombre.2": {
        "url": "/url2",
        "data": {
            "section": "Menu name2",
            "page": "Menu item name2"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model2/index.html"
    }

}]);


app.constant('ROUTERS', [{
    "estado.nombre": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    },

}, {
    "repositorio": {
        "url": "/repositorio",
        "views": {
            "": {
                "templateUrl": "app/views/layout.html"
            },
            "aside": {
                "templateUrl": "app/views/aside.html"
            },
            "content": {
                "templateUrl": "app/views/content.html"
            }
        }
    },
    "repositorio.repositorio": {
        "url": "/repositorio",
        "template": "<div ui-view ></div>"
    }
}, {
    "repositorio.repositorio.almacen": {
        "url": "/almacen",
        "data": {
            "section": "Repositorio",
            "page": "Almacen"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/almacenes/index.html"
    },
    "repositorio.repositorio.almacenesNew": {
        "url": "/almacenes/new",
        "data": {
            "section": "Repositorio",
            "page": "Almacenes"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/almacenes/form.html"
    },
    "repositorio.repositorio.almacenesEdit": {
        "url": "/almacenes/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Almacenes"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/almacenes/form.html"
    }
}, {
    "repositorio.repositorio.categoria": {
        "url": "/categoria",
        "data": {
            "section": "Repositorio",
            "page": "Categoria"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/categorias/index.html"
    },
    "repositorio.repositorio.categoriasNew": {
        "url": "/categorias/new",
        "data": {
            "section": "Repositorio",
            "page": "Categorias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/categorias/form.html"
    },
    "repositorio.repositorio.autoresEdit": {
        "url": "/categorias/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Categorias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/categorias/form.html"
    }

},  {
    "repositorio.repositorio.compra": {
        "url": "/compra",
        "data": {
            "section": "Repositorio",
            "page": "Compras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/compras/index.html"
    },
    "repositorio.repositorio.comprasNew": {
        "url": "/compras/new",
        "data": {
            "section": "Repositorio",
            "page": "Compras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/compras/form.html"
    },
    "repositorio.repositorio.comprasEdit": {
        "url": "/compras/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Compras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/compras/form.html"
    }
    
},  {
    "repositorio.repositorio.detalleCompra": {
        "url": "/detalleCompra",
        "data": {
            "section": "Repositorio",
            "page": "DetalleCompras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleCompras/index.html"
    },
    "repositorio.repositorio.detalleComprasNew": {
        "url": "/detalleCompras/new",
        "data": {
            "section": "Repositorio",
            "page": "DetalleCompras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleCompras/form.html"
    },
    "repositorio.repositorio.detalleComprasEdit": {
        "url": "/detalleCompras/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "DetalleCompras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleCompras/form.html"
    }


},  {
    "repositorio.repositorio.farmacia": {
        "url": "/farmacia",
        "data": {
            "section": "Repositorio",
            "page": "Farmacias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/farmacias/index.html"
    },
    "repositorio.repositorio.farmaciaNew": {
        "url": "/farmacias/new",
        "data": {
            "section": "Repositorio",
            "page": "Farmacias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/farmacias/form.html"
    },
    "repositorio.repositorio.farmaciasEdit": {
        "url": "/farmacias/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Farmacias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/farmacias/form.html"
    }
},  {
    "repositorio.repositorio.marca": {
        "url": "/marca",
        "data": {
            "section": "Repositorio",
            "page": "Marcas"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/marcas/index.html"
    },
    "repositorio.repositorio.marcasNew": {
        "url": "/marcas/new",
        "data": {
            "section": "Repositorio",
            "page": "Marcas"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/marcas/form.html"
    },
    "repositorio.repositorio.marcasEdit": {
        "url": "/marcas/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Marcas"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/marcas/form.html"
    }

},  {
    "repositorio.repositorio.ordenSalida": {
        "url": "/ordenSalida",
        "data": {
            "section": "Repositorio",
            "page": "OrdenSalidas"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/ordenSalidas/index.html"
    },
    "repositorio.repositorio.ordenSalidasNew": {
        "url": "/ordenSalidas/new",
        "data": {
            "section": "Repositorio",
            "page": "OrdenSalidas"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/ordenSalidas/form.html"
    },
    "repositorio.repositorio.ordenSalidasEdit": {
        "url": "/ordenSalidas/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "OrdenSalidas"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/ordenSalidas/form.html"
    }

},  {
    "repositorio.repositorio.producto": {
        "url": "/producto",
        "data": {
            "section": "Repositorio",
            "page": "Productos"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/productos/index.html"
    },
    "repositorio.repositorio.productosNew": {
        "url": "/productos/new",
        "data": {
            "section": "Repositorio",
            "page": "Productos"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/productos/form.html"
    },
    "repositorio.repositorio.productoEdit": {
        "url": "/productos/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Productos"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/productos/form.html"
    }

},  {
    "repositorio.repositorio.proveedor": {
        "url": "/proveedor",
        "data": {
            "section": "Repositorio",
            "page": "Proveedores"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/proveedores/index.html"
    },
    "repositorio.repositorio.proveedorNew": {
        "url": "/proveedores/new",
        "data": {
            "section": "Repositorio",
            "page": "Proveedores"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/proveedores/form.html"
    },
    "repositorio.repositorio.proveedorEdit": {
        "url": "/proveedores/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Proveedores"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/proveedores/form.html"
    }
}
]);
