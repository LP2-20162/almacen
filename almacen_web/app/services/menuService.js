
app
//------------------------------
// TODO: API menu
// por lo pronto colocar aqui el menu para su Modelo, vease test1
//------------------------------
    .factory("menuService", function(authService) {


    var sections = [
        /*
        {
          title: 'Getting Started',
          state: 'getting-started',
          url: '/getting-started',
          type: 'link'
        }
        */
    ];

    sections.push({
        title: 'Dashboard',
        state: 'app.dashboard',
        type: 'link'
    });

    sections.push({
        //title: 'Sección ui',
        //type: 'heading',
        menu: [{
            title: 'U.I.',
            type: 'toggle',
            state: 'ui',
            menu_items: [{
                title: 'Test 1 uno más',
                state: 'ui.test1',
                type: 'link'
            }, {
                title: '2Test 2',
                state: 'ui.test2',
                type: 'link'
            }, {
                title: 'Test 3',
                state: 'ui.test3',
                type: 'link'
            }, {
                title: 'Test 4',
                state: 'ui.test4',
                type: 'link'
            }, {
                title: 'Test 5',
                state: 'ui.test5',
                type: 'link'
            }, {
                title: 'Test Directivas',
                state: 'ui.dir',
                type: 'link'
            }, ]
        }]
    });

    sections.push({

        menu: [{
            title: 'Auths System',
            type: 'toggle',
            state: 'auths.system',
            menu_items: [{
                title: 'xx',
                state: 'auths.system.xx',
                type: 'link'
            }, {
                title: 'Grupos',
                state: 'auths.system.ct',
                type: 'link'
            }, {
                title: 'Permission',
                state: 'auths.system.permission',
                type: 'link'
            }, {
                title: 'Menu',
                state: 'auths.system.menu',
                type: 'link'
            }, {
                title: 'Log',
                state: 'auths.system.log',
                type: 'link'
            }, ]
        }]
    });


    sections.push({

        menu: [{
            title: 'Repositorio',
            type: 'toggle',
            state: 'repositorio.repositorio',
            menu_items: [{
                title: 'Almacenes',
                state: 'repositorio.repositorio.almacen',
                type: 'link'
            }, {
                title: 'Categorias',
                state: 'repositorio.repositorio.categoria',
                type: 'link'
            }, {
                title: 'Compras',
                state: 'repositorio.repositorio.compra',
                type: 'link'
            },  {
                title: 'DetalleCompras',
                state: 'repositorio.repositorio.detalleCompra',
                type: 'link'
            },  {
                title: 'Farmacias',
                state: 'repositorio.repositorio.farmacia',
                type: 'link'
            },  {
                title: 'Marcas',
                state: 'repositorio.repositorio.marca',
                type: 'link'
            },  {
                title: 'OrdenSalidas',
                state: 'repositorio.repositorio.ordenSalida',
                type: 'link'
            },  {
                title: 'Productos',
                state: 'repositorio.repositorio.producto',
                type: 'link'
            },  {
                title: 'Proveedores',
                state: 'repositorio.repositorio.proveedor',
                type: 'link'
            }  ]
        }]
    });

    authService.getMenu().then(function(r) {
        menu = r.data;
        console.log("menuService.authService.getMenu():" + JSON.stringify(menu));
        sections.push(

            menu
        );

    }, function(error) {
        console.log("error in menuService.authService.getMenu():" + JSON.stringify(error));
    });








    return {
        sections: sections,
    };
});





