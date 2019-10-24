let tabla_entradas = function () {
		document.querySelector('#container_inventario').innerHTML = `
		 <div class="jumbotron mt-4">
		 	<div class="row">
		 		<div class="col-lg-12">
		 			<h4>Listado de entradas</h4>
		 		</div>
		 	</div>
		 	<div class="row">
		 		<div class="col-lg-12 table-responsive">
		 			<table class="table table-bordered table-hover mt-3" id="tabla-entradas">
		 				<thead class="thead-dark">
		 					<tr>
		 						<th>Proveedor</th>
		 						<th>Fecha</th>
		 						<th>Cantidad</th>
		 						<th>Factura</th>
		 						<th>IVA</th>
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
			let ultimo = element.entradas;
			ultimo.forEach(item => {
				console.log(item);
				document.getElementById('tb-entradas').innerHTML += `
					<tr>
						<td>${item.proveedor}</td>
						<td>${item.fecha}</td>
						<td>${parseInt(item.cantidad) + parseInt(item.stockActual)}</td>
						<td>${item.factura}</td>
						<td>${item.iva}</td>
					</tr>
				`;
			});
		});
		descargarExcel();
		format_table();

		document.querySelector('.cancelar').addEventListener('click', function () {
			menu();
		});
	});

};