let tabla_empleados = function(data){
	document.querySelector('#jumbotron-personal').innerHTML = `
		<div class="row">
			<div class="col-lg-12 table-responsive">
				<table class="table table-bordered">
					<thead class="thead-dark">
						<tr>
							<th>Nombre</th>
							<th>Rfc</th>
							<th>Curp</th>
							<th>Puesto</th>
							<th>Campamento</th>
							<th>Unidad Trabajo</th>
							<th>Estado</th>
							<th>Municipio</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tb-empleados"></tbody>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2 offset-lg-10 mt-3">
				<button type="button" class="btn btn-danger btn-block" id="regresar-menu">Cancelar</button>
			</div>
		</div>
	`;

	data.forEach(element => {
		document.getElementById('tb-empleados').innerHTML += `
			<tr>
				<td>${element.nombre} ${element.apellido_paterno} ${element.apellido_materno}</td>
				<td>${element.rfc}</td>
				<td>${element.curp}</td>
				<td>${element.puesto}</td>
				<td>${element.campamento}</td>
				<td>${element.unidad_trabajo}</td>
				<td>${element.estado}</td>
				<td>${element.municipio}</td>
				<td id='_${element._id}'></td>
				<td>
					<div class="d-flex justify-content-between">
						<button class="btn btn-primary ver-empleado" id="${element._id}">Ver</button>
						<button class="btn btn-warning mod-empleado" id="${element._id}">Modificar</button>
						<button class="btn btn-danger eli-empleado" id="${element._id}">Eliminar</button>
					</div>
				</td>
			</tr>
		`;

		if (element.activo === true) {
			document.getElementById(`_${element._id}`).innerHTML = `
				<div class="custom-control custom-switch">
					<input type="checkbox" class="custom-control-input activar" id="id_${element._id}" checked>
					<label class="custom-control-label" for="id_${element._id}">Activo</label>
				</div>
			`;
		} else {
			document.getElementById(`_${element._id}`).innerHTML = `
				<div class="custom-control custom-switch">
					<input type="checkbox" class="custom-control-input activar" id="id_${element._id}">
					<label class="custom-control-label" for="id_${element._id}">Inactivo</label>
				</div>
			`;
		}
	});
};

module.exports = tabla_empleados;