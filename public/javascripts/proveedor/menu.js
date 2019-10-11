function menu() {
	document.querySelector('#jumbotron-proveedor').innerHTML = `
        <div class="row">
            <div class="col-lg-12">
                <h4>Menu proveedor</h4>                       
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="card mt-3">
                    <div class="mt-3 d-flex justify-content-center align-itemns-center">
                        <i class="fa fa-warehouse" style="font-size: 64px;"></i>
                    </div>
                    <div class="card-body">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6">
                                <a href="#" class="btn btn-primary btn-block" id="btn-lista-proveedor">Lista proveedores</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-3" style="width: 100%;">
                    <div class="mt-3 d-flex justify-content-center align-itemns-center">
                        <i class="fa fa-box" style="font-size: 64px;"></i>
                    </div>
                    <div class="card-body">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6">
                                <a href="#" class="btn btn-primary btn-block" id="btn-alta-proveedor">Alta proveedor</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

	document.getElementById('btn-alta-proveedor').addEventListener('click', function () {
		formProveedor();
	});

	document.getElementById('btn-lista-proveedor').addEventListener('click', function () {
		tablaProvedos();
	});
};
menu();