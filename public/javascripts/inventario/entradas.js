function entradas() {
	document.querySelector('#container_inventario').innerHTML = `
        <div class="jumbotron mt-4">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Entradas</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 table-responsive">
                    <table class="table table-bordered">
                        <thead class="thead-dark">
                            <tr>
                                <th>Almacen</th>
                                <th>Descripcion</th>
                                <th>Familia/Marca</th>
                                <th>Proveedor</th>
                                <th>Medida</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tb-entradas"></tbody>
                    </table>
                </div>
                <div class="col-lg-3 offset-lg-9 mt-3">
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
            let entrada = element.entradas;
            let ultimo = entrada[entrada.length -1];

            // let actual = element.entradas;
            // let sumaActual = actual[actual.length - 1].stockActual + actual[actual.length - 1].cantidad;
            
            // let salida = element.salidas;
            // let sumSalidas = 0;
            // salida.forEach(element => {
            //     sumSalidas += element.cantidad;
            // });

            // let devolucion = element.devoluciones;
            // let sumDevoluciones = 0;
            // devolucion.forEach(element => {
            //     sumDevoluciones += element.cantidad;
            // });

            // let total = (sumaActual + sumDevoluciones) - sumSalidas;

            // console.log(total);
            let proveedor = '';
            if (ultimo !== undefined) {
                proveedor = ultimo.proveedor;
            }
            document.getElementById('tb-entradas').innerHTML += `
                <tr>
                    <td>${element.almacen}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.familia}</td>
                    <td>${proveedor}</td>
                    <td>${element.medida}</td>
                    <td>
                        <button class="btn btn-success" id="${element._id}" onclick="postExistencia(this.id);"><i class="fa fa-pen"></i></button>
                    </td>
                </tr>
            `;
        });
        descargarExcel();
        format_table();
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
    let producto = fetch('inventario/producto/' + id);

    producto.then(data => { 
        return data.json();
    }).then(res => {
        let entradas = res.entradas;
        let ultimaEntrada = entradas[entradas.length -1];

        createModal();

        document.querySelector('.modal-title').innerHTML = `Registrar entradas`;
        document.querySelector('.modal-body').innerHTML = form;

        if (ultimaEntrada !== undefined) {
            document.querySelector('input[name=stockActual]').value = ultimaEntrada.stockActual + ultimaEntrada.cantidad;
            document.querySelector('input[name=stockMin]').value = ultimaEntrada.stockMin;
            document.querySelector('input[name=stockMax').value = ultimaEntrada.stockMax;
        }


        document.querySelector('.cancelar').addEventListener('click', function () {
            $('#modal').modal('hide');
        });

        document.querySelector('input[name=cantidad]').addEventListener('keyup', function(){
            let cantidad = this.value;
            let costo = document.querySelector('input[name=costo_unidad]').value;

            let total = cantidad * costo;
            document.querySelector('input[name=costo_total]').value = total;
        });
        
        document.querySelector('input[name=costo_unidad]').addEventListener('keyup', function () {
            let costo = this.value;
            let cantidad = document.querySelector('input[name=cantidad]').value;

            let total = cantidad * costo;
            document.querySelector('input[name=costo_total]').value = total;
        });

        document.querySelector('select[name=iva]').addEventListener('change', function(){
            let iva = this.value;
            let total = document.querySelector('input[name=costo_total]').value;

            let calculo = total * iva;
            
            total_iva = parseFloat(total) + parseFloat(calculo);

            document.querySelector('input[name=costo_total_iva]').value = total_iva;
        });

        document.getElementById('form-existencia').addEventListener('submit', function (e) {
            const formulario = this;
            let obj = {
                idProducto
            };

            for (let i = 0; i < formulario.length; i++) {
                const element = formulario[i];
                if (element.required === true && element.value === '') {
                    return;
                } else if (element.required === true) {
                    obj[element.name] = element.value;
                }
            }

            fetch('/inventario/existencia', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(data => {
                document.querySelector('.div-msj').innerHTML = `
                    <div class="alert alert-success" role="alert">
                        Entrada registrada
                    </div>
                `;
            });

            e.preventDefault();
        });
    }).then(() => {
        let medidas = fetch('/proveedor/proveedor');
        medidas.then(data => {
            return data.json();
        }).then(res => {
            res.forEach(item => {
                document.querySelector('select[name=proveedor]').innerHTML += `
                    <option value="${item.proveedor}">${item.proveedor}</option>
                `;
            });
        });
    });
};