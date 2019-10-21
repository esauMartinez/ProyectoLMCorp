let tabla_salidas = function(){
	document.querySelector('#container_inventario').innerHTML = `
		 <div class="jumbotron mt-4">
		 	<div class="row">
		 		<div class="col-lg-12">
		 			<h4>Listados de salidas</h4>
		 		</div>
		 	</div>
		 	<div class="row">
		 		<div class="col-lg-12 table-responsive">
		 			<table class="table table-bordered mt-3" id="tabla-salidas">
		 				<thead class="thead-dark">
		 					<tr>
		 						<th>Nombre</th>
		 						<th>Producto</th>
		 						<th>Cantidad</th>
		 						<th>Fecha</th>
		 					</tr>
		 				</thead>
		 				<tbody id="tb-salidas"></tbody>
		 			</table>
				 </div>
				<div class="col-lg-3 offset-lg-6 mt-3">
		 			<button type="button" class="btn btn-success btn-block imprimir">Imprimir reporte</button>
		 		</div>
		 		<div class="col-lg-3 mt-3">
		 			<button type="button" class="btn btn-danger btn-block cancelar">Regresar</button>
		 		</div>
		 	</div>
		 </div>
	`;

	let response = fetch('inventario/salida');
	response.then(res => {
		return res.json();
	}).then(res => {
		res.forEach(element => {
			let salidas = element.salidas;
			salidas.forEach(item => {
				document.getElementById('tb-salidas').innerHTML += `
					<tr>
						<td>${item.nombre}</td>
						<td>${item.producto}</td>
						<td>${item.cantidad}</td>
						<td>${item.fecha}</td>
					</tr>
				`;
			});
		});
		$('#tabla-salidas').DataTable();
	});
};