let tabla_unidades = function (data) {
	document.querySelector('#jumbotron-unidad').innerHTML = `
		<div class="row">
			<div class="col-lg-12 table-responsive">
				<table class="table table-bordered">
					<thead class="thead-dark">
						<tr>
							<th>No economico</th>
							<th>Tipo</th>
							<th>Condicion</th>
							<th>Placas</th>
							<th>Marca</th>
							<th>Modelo</th>
							<th>Color</th>
							<th>Combustible</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tb-unidades"></tbody>
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
		document.getElementById('tb-unidades').innerHTML += `
			<tr>
				<td>${element.economico}</td>
				<td>${element.tipo}</td>
				<td>${element.condicion}</td>
				<td>${element.placas}</td>
				<td>${element.marca}</td>
				<td>${element.modelo}</td>
				<td id="color-td${element._id}"></td>
				<td>${element.combustible}</td>
				<td>
					<div class="d-flex justify-content-between">
						<button class="btn btn-primary ver-unidad" id="${element._id}">Ver</button>
						<button class="btn btn-warning mod-unidad" id="${element._id}">Modificar</button>
						<button class="btn btn-danger eli-unidad" id="${element._id}">Eliminar</button>
					</div>
				</td>
			</tr>
		`;

		document.getElementById('color-td'+element._id+'').innerHTML = `
			<input type="color" value="${element.color}">
		`;
	});
	descargarExcel();
	format_table();
};

module.exports = tabla_unidades;