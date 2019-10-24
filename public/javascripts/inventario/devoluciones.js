let devoluciones = function () {
	document.querySelector('#container_inventario').innerHTML = `
		 <div class="jumbotron mt-4">
		 	<div class="row">
		 		<div class="col-lg-12">
		 			<h4>Listado de devoluciones</h4>
		 		</div>
		 	</div>
		 	<div class="row">
		 		<div class="col-lg-12 table-responsive">
		 			<table class="table table-bordered table-hover mt-3" id="tabla-devoluciones">
		 				<thead class="thead-dark">
		 					<tr>
		 						<th>Nombre</th>
		 						<th>Producto</th>
		 						<th>Cantidad</th>
		 						<th>Fecha</th>
		 					</tr>
		 				</thead>
		 				<tbody id="tb-devoluciones"></tbody>
		 			</table>
				</div>
		 		<div class="col-lg-3 offset-lg-9 mt-3">
		 			<button type="button" class="btn btn-danger btn-block cancelar">Regresar</button>
		 		</div>
		 	</div>
		 </div>
	`;

	document.querySelector('.cancelar').addEventListener('click', function () {
		menu();
	});

	let response = fetch('inventario/devoluciones');
	response.then(res => {
		return res.json();
	}).then(res => {
		res.forEach(element => {
			let salidas = element.salidas;
			var result = _.chain(salidas).groupBy('nombre').map(function (v, i) {
				return {
					nombre: _.get(_.find(v, 'nombre'), 'nombre'),
					producto: _.get(_.find(v, 'producto'), 'producto'),
					cantidad: _.get(_.find(v, 'producto'), 'producto'),
					cantidad: _.sumBy(v, 'cantidad'),
					fecha: _.get(_.find(v, 'fecha'), 'fecha'),
					_id: _.get(_.find(v, '_id'), '_id'),
					idEmpleado: _.get(_.find(v, 'idEmpleado'), 'idEmpleado')
				}
			}).value();

			result.forEach(item => {
				document.getElementById('tb-devoluciones').innerHTML += `
					<tr style="cursor: pointer;" id="${element._id} ${item.idEmpleado}" onclick="gernerarDevolucion(this.id)">
						<td>${item.nombre}</td>
						<td>${item.producto}</td>
						<td>${item.cantidad}</td>
						<td>${item.fecha}</td>
					</tr>
				`;
			});
		});
		descargarExcel();
		format_table();
	});
};

let gernerarDevolucion = function(id){
	let idProducto = id.split(' ')[0];
	let idEmpleado = id.split(' ')[1];
	
	let response = fetch('inventario/prestamos', {
		method: 'POST',
		body: JSON.stringify({
			idProducto: idProducto,
			idEmpleado: idEmpleado
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	response.then(res => {
		return res.json();
	}).then(res => {
		createModal();
		document.querySelector('.modal-body').innerHTML = `
			<form action="#" id="form-devolver">
				<div class="row">
					<div class="col-lg-6">
						<div class="form-group">
							<label for="">Nombre</label>
							<input type="text" class="form-control" name="nombre" value="${res.nombre}" disabled required>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="form-group">
							<label for="">Producto</label>
							<input type="text" class="form-control" name="producto" value="${res.producto}" disabled required>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="form-group">
							<label for="">Cantidad prestada</label>
							<input type="text" class="form-control" name="cantidad_prestada" value="${res.suma}" disabled required>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="form-group">
							<label for="">Cantidad devolver</label>
							<input type="text" class="form-control" name="cantidad" required>
						</div>
					</div>
					<div class="col-lg-12 div-msj"></div>
					<div class="col-lg-3 offset-lg-9">
						<button type="submit" class="btn btn-primary btn-block" id="btn-devolver">Devolver</button>
					</div>
				</div>
			</form>
		`;

		document.querySelector('input[name=cantidad]').addEventListener('keyup', function(){
			let prestada = document.querySelector('input[name=cantidad_prestada]').value;
			if (parseInt(this.value) > parseInt(prestada)) {
				document.querySelector('.div-msj').innerHTML = `
					<div class="alert alert-danger" role="alert">
						La cantidad a devolver debe de ser menor a la prestada
					</div>
				`;
				document.getElementById('btn-devolver').disabled = true;
			} else {
				document.querySelector('.div-msj').innerHTML = '';
				document.getElementById('btn-devolver').disabled = false;
			}
		});

		document.getElementById('form-devolver').addEventListener('submit', function(e){
			const formulario = this;
			let obj = { idEmpleado: res.idEmpleado, idProducto: res.idProducto };

			for (let i = 0; i < formulario.length; i++) {
				const element = formulario[i];
				if (element.required === true && element.value === '') {
					return;
				} else if (element.required === true) {
					obj[element.name] = element.value;
				}
			}

			fetch('inventario/devoluciones', {
				method: 'POST',
				body: JSON.stringify(obj),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => {
				document.querySelector('.div-msj').innerHTML = `
					<div class="alert alert-success" role="alert">
						Salida registrada
					</div>
				`;

				document.getElementById('form-devolver').reset();
			});

			e.preventDefault(e);
		});
	});
};
