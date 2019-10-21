let salidas = function(){
	document.querySelector('#container_inventario').innerHTML = `
		<div class="jumbotron mt-4">
			<table class="table table-bordered table-hover" id="table-empleados">
				<thead class="thead-dark">
					<tr>
						<th>Nombre</th>
						<th>Rfc</th>
						<th>Curp</th>
						<th>Puesto</th>
						<th>Unidad Trabajo</th>
					</tr>
				</thead>
				<tbody id="tb-empleados"></tbody>
			</table>
		</div>
	`;

	let response = fetch('personal/empleado');
	response.then(res => {
		return res.json();
	}).then(res => {
		res.forEach(element => {
			document.getElementById('tb-empleados').innerHTML += `
				<tr style="cursor: pointer" id="${element._id}" onclick="seleccionarEmpleado(this.id)">
					<td>${element.nombre} ${element.apellido_paterno} ${element.apellido_materno}</td>
					<td>${element.rfc}</td>
					<td>${element.curp}</td>
					<td>${element.puesto}</td>
					<td>${element.campamento}</td>
				</tr>
			`;
		});
		$('#table-empleados').DataTable();
	});
};

let seleccionarEmpleado = function(id){
	let response = fetch('personal/empleado' + '/' + id);
	response.then(res => {
		return res.json();
	}).then(res => {
		console.log(res);
		localStorage.setItem('idEmpleado', res._id);
		createModal();
		document.querySelector('.modal-body').innerHTML = `
			<form action="#" id="form-salida">
				<div class="row">
					<div class="col-lg-12">
						<div class="form-group">
							<label for="">Emplaedo</label>
							<input type="text" class="form-control" name="nombre" value="${res.nombre} ${res.apellido_paterno} ${res.apellido_materno}" disabled required>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="form-group">
							<label for="">Producto</label>
							<input type="text" class="form-control" name="producto" id="producto" disabled required>
						</div>
					</div>
					<div class="col-lg-2">
						<div class="form-group mt-4">
							<button type="button" class="btn btn-primary btn-block" id="btn-search-prod"><i class="fa fa-search"></i></button>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="form-group">
							<label for="">Stock actual</label>
							<input type="number" class="form-control" name="actual" id="actual" disabled required>
						</div>
					</div>
					<div class="col-lg-3">
						<div class="form-group">
							<label for="">Cantidad</label>
							<input type="number" class="form-control" name="cantidad" id="cantidad" required>
						</div>
					</div>
					<div class="col-lg-12">
						<div class="form-group">
							<label for="">Fecha</label>
							<input type="text" class="form-control" name="fecha" id="fecha" disabled required>
						</div>
					</div>
					<div class="col-lg-12 msj-registro"></div>
					<div class="col-lg-3 offset-lg-9">
						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-block" id="btn-guardar-salida">Guardar</button>
						</div>
					</div>
				</div>
			</form>
			<div id="div-productos"></div>
		`;

		document.getElementById('form-salida').addEventListener('submit', function(e){
			const formulario = this;
			let obj = {};

			for (let i = 0; i < formulario.length; i++) {
				const element = formulario[i];
				if (element.required === true && element.value === '') {
					return;
				} else if (element.required === true) {
					obj[element.name] = element.value;
				}
			}

			let idProducto = localStorage.getItem('idProducto');
			let idEmpleado = localStorage.getItem('idEmpleado');

			obj.idProducto = idProducto;
			obj.idEmpleado = idEmpleado;
			
			fetch('/inventario/salida', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(obj)
			}).then(data => {
				formulario.reset();
				document.querySelector('.msj-registro').innerHTML = `
					<div class="alert alert-success" role="alert">
						Salida registrada
					</div>
				`;
			});

			e.preventDefault();
		});

		document.getElementById('btn-search-prod').addEventListener('click', function(){
			document.getElementById('form-salida').style.visibility = 'hidden';
			let response = fetch('inventario/producto');
			response.then(res => {
				return res.json();
			}).then(res => {
				document.getElementById('div-productos').innerHTML = `
					<table class="table table-bordered table-hover" id="table-productos">
						<thead class="thead-dark">
							<tr>
								<th>Nombre</th>
							</tr>
						</thead>
						<tbody id="tb-productos"></tbody>
					</table>
				`;
				res.forEach(element => {
					document.getElementById('tb-productos').innerHTML += `
						<tr style="cursor: pointer" id="${element._id}" onclick="taerProducto(this.id)">
							<td>${element.descripcion}</td>
						</tr>
					`;
				});
				$('#table-productos').DataTable();
			});
		});

		let fecha = new Date();
		let mes = fecha.getMonth() + 1;
		let messtr = mes;
		if (mes < 10) {
			messtr = 0 + mes;
		}
		document.getElementById('fecha').value = fecha.getDate() + '/' + messtr + '/' + fecha.getFullYear();
	});
};

let taerProducto = function(id){
	let response = fetch('inventario/producto/' + id);
	response.then(res => {
		return res.json();
	}).then(res => {
		console.log(res);
		localStorage.setItem('idProducto', res._id);

		document.getElementById('form-salida').style.visibility = 'visible';
		document.getElementById('div-productos').innerHTML = '';

		document.getElementById('producto').value = res.descripcion;
		let actual = res.entradas;
		let sumaActual = actual[actual.length - 1].stockActual + actual[actual.length - 1].cantidad;
		let salida = res.salidas;
		let sumSalidas = 0;
		salida.forEach(element => {
			sumSalidas += element.cantidad;
		});
		
		let devolucion = res.devoluciones;
		let sumDevoluciones = 0;
		devolucion.forEach(element => {
			sumDevoluciones += element.cantidad;
		});

		let total = (sumaActual + sumDevoluciones) - sumSalidas;

		document.getElementById('actual').value = total;

		document.getElementById('cantidad').addEventListener('keyup', function(){
			document.querySelector('.msj-registro').innerHTML = '';
			let num1 = document.getElementById('actual').value;
			let num2 = this.value;

			if (parseInt(num2) > parseInt(num1)) {
				document.getElementById('btn-guardar-salida').disabled = true;
				document.querySelector('.msj-registro').innerHTML = `
					<div class="alert alert-danger" role="alert">
						No se cuenta con stock suficiente
					</div>
				`;
			} else {
				document.getElementById('btn-guardar-salida').disabled = false;
			}
		});
	});
};