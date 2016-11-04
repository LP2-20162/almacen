﻿var baseUrl = 'http://localhost:9000/';
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
    "repositorio.repositorio.almacenes": {
        "url": "/almacenes",
        "data": {
            "section": "Repositorio",
            "page": "Almacenes"
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
    "repositorio.repositorio.categorias": {
        "url": "/categorias",
        "data": {
            "section": "Repositorio",
            "page": "Categorias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/categorias/index.html"
    },
    "repositorio.repositorio.autoresNew": {
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
    "repositorio.repositorio.compras": {
        "url": "/compras",
        "data": {
            "section": "Repositorio",
            "page": "Compras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/compras/index.html"
    },
    "repositorio.repositorio.autoresNew1": {
        "url": "/compras/new",
        "data": {
            "section": "Repositorio",
            "page": "Compras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/compras/form.html"
    },
    "repositorio.repositorio.autoresEdit1": {
        "url": "/compras/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Compras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/compras/form.html"
    }
    
},  {
    "repositorio.repositorio.detalleCompras": {
        "url": "/detalleCompras",
        "data": {
            "section": "Repositorio",
            "page": "DetalleCompras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleCompras/index.html"
    },
    "repositorio.repositorio.autoresNew2": {
        "url": "/detalleCompras/new",
        "data": {
            "section": "Repositorio",
            "page": "DetalleCompras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleCompras/form.html"
    },
    "repositorio.repositorio.autoresEdit2": {
        "url": "/detalleCompras/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "DetalleCompras"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleCompras/form.html"
    }

},  {
    "repositorio.repositorio.detalleOses": {
        "url": "/detalleOses",
        "data": {
            "section": "Repositorio",
            "page": "DetalleOses"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleOses/index.html"
    },
    "repositorio.repositorio.autoresNew3": {
        "url": "/detalleOses/new",
        "data": {
            "section": "Repositorio",
            "page": "DetalleOses"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleOses/form.html"
    },
    "repositorio.repositorio.autoresEdit3": {
        "url": "/detalleOses/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "DetalleOses"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/detalleOses/form.html"
    }

},  {
    "repositorio.repositorio.farmacias": {
        "url": "/farmacias",
        "data": {
            "section": "Repositorio",
            "page": "Farmacias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/farmacias/index.html"
    },
    "repositorio.repositorio.autoresNew4": {
        "url": "/farmacias/new",
        "data": {
            "section": "Repositorio",
            "page": "Farmacias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/farmacias/form.html"
    },
    "repositorio.repositorio.autoresEdit4": {
        "url": "/farmacias/:id/edit",
        "data": {
            "section": "Repositorio",
            "page": "Farmacias"
        },
        "templateUrl": "almacen_web_apps/repositorio_web/views/farmacias/form.html"
    }




    

}, 
}
]);
