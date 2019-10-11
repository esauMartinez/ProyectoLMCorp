function entradas() {
	document.querySelector('#container_inventario').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Entradas</h4>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <div class="form-group">
                        <label for="">Almacen</label>
                        <input class="form-control" name="almacen" id="almacen">
                    </div>
                </div>
                <div class="col-lg-1">
                    <div class="form-group mt-4">
                        <button type="button" class="btn btn-primary btn-block" onclick="getAlmacen()"><i class="fa fa-search"></i></button>
                    </div>
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="">Factura</label>
                        <input type="text" class="form-control" name="factura">
                    </div>
                </div>
                <div class="col-lg-1">
                    <div class="form-group mt-4">
                        <button type="button" class="btn btn-primary btn-block"><i class="fa fa-folder"></i></button>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="form-group">
                        <label for="">Iva</label>
                        <select class="form-control" name="iva" id="iva"></select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="form-group">
                        <label for="">Proveedor</label>
                        <input class="form-control" name="preoveedor" id="preoveedor">
                    </div>
                </div>
                <div class="col-lg-1">
                    <div class="form-group mt-4">
                        <button type="button" class="btn btn-primary btn-block" onclick="getProveedor()"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="form-group">
                        <label for="">Fecha</label>
                        <input type="date" class="form-control" name="fecha">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 table-responsive">
                    <table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <!-- <th>Clave</th> -->
                                <th>Descripcion</th>
                                <th>Familia/Marca</th>
                                <th>Cantidad</th>
                                <th>Medida</th>
                                <th>Moneda</th>
                                <th>Costo Unitario</th>
                                <th>Costo Total</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tb-entradas"></tbody>
                    </table>
                </div>
                <div class="col-lg-3 offset-lg-9">
                    <button type="button" class="btn btn-danger btn-block cancelar">Regresar</button>
                </div>
            </div>
        </div>
    `;

	let productos = fetch('/inventario/producto');
	productos.then(res => {
		let data = res.json();
		return data;
	}).then(res => {
        res.forEach(element => {
            let entrada = (element.entradas).pop();
            document.getElementById('tb-entradas').innerHTML += `
                <tr>
                    <td>${element.descripcion}</td>
                    <td>${element.familia}</td>
                    <td>${entrada.cantidad}</td>
                    <td>${element.medida}</td>
                    <td>${entrada.moneda}</td>
                    <td>${entrada.costo_unidad}</td>
                    <td>${entrada.costo_total}</td>
                    <td>${entrada.costo_total}</td>
                    <td>
                        <button class="btn btn-success" id="${element._id}" onclick="postExistencia(this.id);"><i class="fa fa-pen"></i></button>
                    </td>
                </tr>
            `;
        });
	});

	document.querySelector('.cancelar').addEventListener('click', function () {
		menu();
	});
};

let getAlmacen = async function(){
    createModal();
    document.querySelector('.modal-title').innerHTML = `Buscar almacen`;
    document.querySelector('.modal-body').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Listado de almacenes</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <table class="table table-bordered table-hover mt-3">
                        <thead class="thead-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Encargado</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody id="tb-almacen"></tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    let response = await fetch('/inventario/almacen');
    let data = response.json();

    data.then(data => {
        for (let i = 0; i < data.length; i++) {
            const almacen = data[i];
            document.getElementById('tb-almacen').innerHTML += `
                <tr class="table-secondary">
                    <td>${almacen.nombre}</td>
                    <td>${almacen.direccion}</td>
                    <td>${almacen.encargado}</td>
                    <td>${almacen.telefono}</td>
                </tr>
            `;
        };
    });
};

let getProveedor = function () { 
    createModal();
    document.querySelector('.modal-title').innerHTML = `Buscar proveedor`;
    document.querySelector('.modal-body').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Listado de Porveedores</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <table class="table table-bordered table-hover mt-3">
                        <thead class="thead-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Encargado</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody id="tb-almacen"></tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
};

let postExistencia = function(id){
    let form = existencias();
    let idProducto = id;
    createModal();
    document.querySelector('.modal-title').innerHTML = `Registrar existencias`;
    document.querySelector('.modal-body').innerHTML = form;
    document.querySelector('.cancelar').addEventListener('click', function () {
        $('#modal').modal('hide');
    });

    document.getElementById('form-existencia').addEventListener('submit', function(e){
        const formulario = this;
        let obj = { idProducto };

        for (let i = 0; i < formulario.length; i++) {
            const element = formulario[i];
            if (element.required === true && element.value === '') {
                return;
            } else if (element.required === true) {
                obj[element.name] = element.value;
            }
        }

        console.log(obj);

        e.preventDefault();
    });
};