let tabla_devoluciones = function () {
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

	let response = fetch('inventario/producto');
	response.then(res => {
		return res.json();
	}).then(res => {
		res.forEach(element => {
			let devoluciones = element.devoluciones;
			devoluciones.forEach(item => {
				document.getElementById('tb-devoluciones').innerHTML += `
					<tr style="cursor: pointer;">
						<td>${item.nombre}</td>
						<td>${item.producto}</td>
						<td>${item.cantidad}</td>
						<td>${((item.fecha).split('T')[0]).replace(/-/g, '/')}</td>
					</tr>
				`;
			});
		});
		descargarExcel();
		format_table();
	});
};