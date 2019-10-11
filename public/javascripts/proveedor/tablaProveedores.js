let tablaProvedos = function(){
	document.getElementById('jumbotron-proveedor').innerHTML = ` 
		<div class="row">
			<div class="col-lg-12">
				<table class="table table-light">
					<thead class="thead-dark">
						<tr>
							<th>Proveedor</th>
							<th>Contacto</th>
							<th>Telefono</th>
							<th>Colonia</th>
							<th>Municipio</th>
							<th>Delegacion</th>
							<th>Estado</th>
							<th>Pais</th>
							<th></th>
						</tr>
					</thead>
					<tbody id="tb-proveedor"></tbody>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 offset-lg-9">
				<button type="button" class="btn btn-danger btn-block" id="btn-regresar" onclick="regresar()">Regresar</button>
			</div>	
		</div>
	`;
	

	let medidas = fetch('/proveedor/proveedor')
    medidas.then(data => {
        let res = data.json();
        return res;
    }).then(res => {
        res.forEach(element => {
            document.getElementById('tb-proveedor').innerHTML += `
                <tr>
                    <td>${element.proveedor}</td>
                    <td>${element.contacto}</td>
                    <td>${element.telefono}</td>
                    <td>${element.colonia}</td>
                    <td>${element.municipio}</td>
                    <td>${element.delegacion}</td>
                    <td>${element.estado}</td>
                    <td>${element.pais}</td>
					<td>
						<div class="d-flex justify-content-around">
							<button class="btn btn-primary" id="${element._id}" onclick="verProvee(this.id)">Ver</button>
							<button class="btn btn-warning" id="${element._id}" onclick="modProvee(this.id)">Modificar</button>
							<button class="btn btn-danger" id="${element._id}" onclick="eliProvee(this.id)">Eliminar</button>
						</div>
					</td>
                </tr>
            `;
        });
    });
};

let traerProveedor = async function(id){
	let provedor = await fetch('/proveedor/proveedor/' + id);
	return provedor.json();
};


let verProvee = function(id){	
	createModal();
	document.querySelector('.modal-title').innerHTML = `Datos proveedor`;

	traerProveedor(id).then(data => {
		for (var i in data) {
			console.log()
			if (i !== '__v' && i !== '_id') {
				document.querySelector('.modal-body').innerHTML += `<p>${i}: <strong>${data[i]}</strong></p>`;
			}
		}
	});
};

let modProvee = function(id){
	formProveedor();
	 const formulario = document.getElementById('form-proveedor');
	traerProveedor(id).then(data => {
		for (let i = 0; i < formulario.length; i++) {
			const element = formulario[i];
			for (var j in data) {
				if (j === element.name) {
					// console.log(j + ' ' + data[j]);
					switch(element.type){
						case 'text':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'date':
							let f = data[j].split('T')[0].replace(/-/g, '/');
							console.log(f);
							// document.querySelector(`#fecha_ing`).value = f;
							break;
						case 'number':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'select-one':
							document.querySelector(`select[name=${j}]`).value = data[j];
							break;
						default:
							document.querySelector(`textarea`).value = data[j];
							break;
					}
				}
			}
		}
	});

	document.querySelector('#btn-regresar').addEventListener('click', function(){
		tablaProvedos();
	});

	document.querySelector('#btn-guardar').addEventListener('click', function () {
		modificarProveedor();
	});
};

let modificarProveedor = function () {
	alert('modificar');
	const formulario = document.getElementById('form-proveedor');
	let obj = {};

	for (let i = 0; i < formulario.length; i++) {
		const element = formulario[i];
		if (element.required === true && element.value === '') {
			return;
		} else if (element.required === true) {
			obj[element.name] = element.value;
		}
	}

	console.log(obj);

	// fetch('/proveedor/proveedor', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(obj)
	// }).then(data => {
	// 	formulario.reset();
	// 	document.querySelector('.msj-registro').innerHTML = `
    //             <div class="alert alert-success" role="alert">
    //                 Almacen registrado exitosamente
    //             </div>
    //         `;
	// });
};