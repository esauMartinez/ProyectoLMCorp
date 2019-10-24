import menu from './menu.js';
import formulario from './form.js';
import validar from './validar_form.js';
import Unidad from './unidad.js';
import tabla_unidades from './tabla_unidades.js';

let unidad = new Unidad;

let insertar_menu = function(){
	menu();
	document.getElementById('btn-lista-unidades').addEventListener('click', function () {
		tabla();
	});
	
	document.getElementById('btn-alta-unidad').addEventListener('click', function () {
		insertar_form();
	});

	document.getElementById('btn-unidades').style.background = 'rgb(43, 43, 43)';
};
insertar_menu();

let insertar_form = function(){
	let form = formulario();
	document.querySelector('#jumbotron-unidad').innerHTML = `
		<div class="row">
			<div class="col-lg-12 mt-3">
				<h4>Datos unidad</h4>
			</div>
			<div class="col-lg-12">
				<div class="card mt-2 p-3" style="width: 100%;">	
					${form}
				</div>
			</div>
		</div>
	`;

	document.getElementById('form-unidad').addEventListener('submit', function (e) {
		let datos = validar();
		let uni = unidad.postUnidad(datos);
		uni.then(() => {
			document.querySelector('.div-msj').innerHTML = `
				<div class="alert alert-success" role="alert">
					Unidad agregada
				</div>
			`;
		});
		e.preventDefault();
	});

	document.getElementById('btn-cancelar').addEventListener('click', function (e) {
		insertar_menu();
	});

	document.querySelector('input[name=poliza]').addEventListener('change', function () {
		let ext_poliza = (this.files[0].name).split('.');
		if (ext_poliza[1] !== 'pdf') {
			createModal();
			document.querySelector('.modal-title').innerHTML = 'Tipo extencion';
			document.querySelector('.modal-body').innerHTML = `
				<h4>La extencion del archivo no se permite</h4>
			`;
			this.value = '';
		}
	});

	let extenciones_img = ['jpg', 'png'];
	document.querySelector('input[name=foto]').addEventListener('change', function () {
		let ext_imagen = (this.files[0].name).split('.');
		let res = extenciones_img.indexOf(ext_imagen[1]);
		if (res === -1) {
			createModal();
			document.querySelector('.modal-title').innerHTML = 'Tipo extencion';
			document.querySelector('.modal-body').innerHTML = `
				<h4>La extencion del archivo no se permite</h4>
			`;
			this.value = '';
		}
	});

	document.querySelector('.btn-danger').addEventListener('click', function (e) {
		inertar_menu();
	});
};

let tabla = function(){
	let data = unidad.getUnidades();
	data.then(res => {
		tabla_unidades(res);
		let btn_ver = document.getElementsByClassName('ver-unidad');
		for (let i = 0; i < btn_ver.length; i++) {
			const element = btn_ver[i];
			element.onclick = function () {
				verUnidad(element.id);
			}
		}

		let btn_mod = document.getElementsByClassName('mod-unidad');
		for (let i = 0; i < btn_mod.length; i++) {
			const element = btn_mod[i];
			element.onclick = function () {
				modUnidad(element.id);
			}
		}

		let btn_eli = document.getElementsByClassName('eli-unidad');
		for (let i = 0; i < btn_eli.length; i++) {
			const element = btn_eli[i];
			element.onclick = function () {
				eliUnidad(element.id);
			}
		}

		let regresar = document.getElementById('regresar-menu');
		regresar.onclick = function () {
			insertar_menu();
		};
	});
};

let verUnidad = function (id) {
	let data = unidad.getUnidad(id);
	data.then(res => {
		let form = formulario();
		document.querySelector('#jumbotron-unidad').innerHTML = `
			<div class="row">
				<div class="col-lg-12 mt-3">
					<h4>Datos unidad</h4>
				</div>
				<div class="col-lg-12">
					<div class="card mt-2 p-3" style="width: 100%;">	
						${form}
					</div>
				</div>
			</div>
		`;
		return res;
	}).then(data => {
		const formulario = document.getElementById('form-unidad');
		for (let i = 0; i < formulario.length; i++) {
			const element = formulario[i];
			for (var j in data) {
				if (j === element.name) {
					switch (element.type) {
						case 'text':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'date':
							let f = data[j].split('T')[0];
							document.querySelector(`input[name=${j}]`).value = f;
							break;
						case 'number':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'select-one':
							document.querySelector(`select[name=${j}]`).value = data[j];
							break;
						case 'color':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'file':
							document.querySelector(`input[name=${j}]`).value = '';
							break;
						default:
							document.querySelector(`textarea`).value = data[j];
							break;
					}
				}
			}
		}

		document.getElementById('btn-guardar').disabled = true;

		document.querySelector('.btn-danger').addEventListener('click', function (e) {
			tabla();
		});
	});
};

let modUnidad = function (id) {
	let data = unidad.getUnidad(id);
	data.then(res => {
		let form = formulario();
		document.querySelector('#jumbotron-unidad').innerHTML = `
			<div class="row">
				<div class="col-lg-12 mt-3">
					<h4>Datos unidad</h4>
				</div>
				<div class="col-lg-12">
					<div class="card mt-2 p-3" style="width: 100%;">	
						${form}
					</div>
				</div>
			</div>
		`;
		return res;
	}).then(data => {
		const formulario = document.getElementById('form-unidad');
		for (let i = 0; i < formulario.length; i++) {
			const element = formulario[i];
			for (var j in data) {
				if (j === element.name) {
					switch (element.type) {
						case 'text':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'date':
							let f = data[j].split('T')[0];
							document.querySelector(`input[name=${j}]`).value = f;
							break;
						case 'number':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'select-one':
							document.querySelector(`select[name=${j}]`).value = data[j];
							break;
						case 'color':
							document.querySelector(`input[name=${j}]`).value = data[j];
							break;
						case 'file':
							document.querySelector(`input[name=${j}]`).value = '';
							break;
						default:
							document.querySelector(`textarea`).value = data[j];
							break;
					}
				}
			}
		}

		let id = data._id;

		document.getElementById('form-unidad').addEventListener('submit', function (e) {
			let datos = validar();
			datos.append('id', id);

			let mod = unidad.putUnidad(datos);
			mod.then(() => {
				document.querySelector('.div-msj').innerHTML = `
					<div class="alert alert-success" role="alert">
						Unidad modificada
					</div>
				`;
			});

			e.preventDefault();
		});

		document.querySelector('.btn-danger').addEventListener('click', function (e) {
			tabla();
		});
	});
};

let eliUnidad= function (id) {
	let data = unidad.deleteUnidad(id);
	data.then(() => {
		tabla();
	});
};