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
		unidad.postUnidad(datos);
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

		let regresar = document.getElementById('regresar-menu');
		regresar.onclick = function () {
			insertar_menu();
		};
	});
};

let verUnidad = function (id) {
	let data = unidad.getUnidad(id);
	data.then(res => {
		console.log(res);
		createModal();
	});
};

let modUnidad = function (id) {
	let data = unidad.getUnidad(id);
	data.then(res => {
		console.log(res);
		insertar_form();
	});
};

let eliUnidad= function (id) {
	let data = empleado.deleteEmpleado(id);
	data.then(() => {
		insertar_tabla();
	});
};