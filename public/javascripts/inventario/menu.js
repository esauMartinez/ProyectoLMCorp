function menu(){
    document.querySelector('#container_inventario').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Inventario</h4>                       
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="card mt-3" style="width: 100%;">
                        <div class="mt-3 d-flex justify-content-center align-itemns-center">
                            <i class="fa fa-box" style="font-size: 64px;"></i>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-primary btn-block" id="btn-alta-producto">Alta productos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-3" style="width: 100%;">
                        <div class="mt-3 d-flex justify-content-center align-itemns-center">
                            <i class="fa fa-clipboard-list" style="font-size: 64px;"></i>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-primary btn-block" id="btn-listado-prod">Listado de productos</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-3">
                        <div class="mt-3 d-flex justify-content-center align-itemns-center">
                            <i class="fa fa-warehouse" style="font-size: 64px;"></i>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-primary btn-block" id="btn-alta-almacen">Alta almacen</a>
                                </div>
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-warning btn-block" id="btn-lista-almacen">Lista almacen</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-6">
                    <div class="card mt-3" style="width: 100%;">
                        <div class="mt-3 d-flex justify-content-center align-itemns-center">
                            <i class="fa fa-list-ol" style="font-size: 64px;"></i>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-primary btn-block" id="btn-existencias">Existencias</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="col-lg-6">
                    <div class="card mt-3" style="width: 100%;">
                        <div class="mt-3 d-flex justify-content-center align-itemns-center">
                            <i class="fa fa-truck-loading" style="font-size: 64px;"></i>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-primary btn-block" id="btn-entradas">Entradas</a>
                                </div>
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-warning btn-block" id="btn-lista-entradas">Lista de Entradas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-3" style="width: 100%;">
                        <div class="mt-3 d-flex justify-content-center align-itemns-center">
                            <i class="fa fa-arrow-right" style="font-size: 64px;"></i>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-6">                                    
                                    <a href="#" class="btn btn-primary btn-block" id="btn-salidas">Salidas</a>
                                </div>
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-warning btn-block" id="btn-ver-salidas">Ver salidas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card mt-3" style="width: 100%;">
                        <div class="mt-3 d-flex justify-content-center align-itemns-center">
                            <i class="fa fa-arrow-left" style="font-size: 64px;"></i>
                        </div>
                        <div class="card-body">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-primary btn-block" id="btn-devoluciones">Devoluciones</a>
                                </div>
                                <div class="col-lg-6">
                                    <a href="#" class="btn btn-warning btn-block" id="btn-tabla-devoluciones">Ver devoluciones</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('btn-alta-almacen').addEventListener('click', function () {
        form_almacen();
    });

    document.getElementById('btn-alta-producto').addEventListener('click', function () {
        form_producto();
    });

    document.getElementById('btn-listado-prod').addEventListener('click', function () {
        listado_productos();
    });

    document.getElementById('btn-lista-almacen').addEventListener('click', function () {
        listado_almacen();
    });

    document.getElementById('btn-entradas').addEventListener('click', function () {
        entradas();
    });

    document.getElementById('btn-salidas').addEventListener('click', function () {
        salidas();
    });

    document.getElementById('btn-ver-salidas').addEventListener('click', function () {
        tabla_salidas();
    });

    document.getElementById('btn-devoluciones').addEventListener('click', function () {
        devoluciones();
    });

    document.getElementById('btn-tabla-devoluciones').addEventListener('click', function () {
        tabla_devoluciones();
    });

    document.getElementById('btn-lista-entradas').addEventListener('click', function () {
        tabla_entradas();
    });
    

    document.getElementById('btn-inventario').style.background = 'rgb(43, 43, 43)';
};
menu();