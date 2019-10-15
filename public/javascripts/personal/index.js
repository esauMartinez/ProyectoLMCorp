import Empleado  from './personal.js';
import formulario from './form_empleado.js';
import menu from './menu.js';
import postEmpleado from './postEmpleado.js';
import tabla_empleados from './tabla_empleados.js';

let empleado = new Empleado;

let inertar_menu = function(){
	menu();
	document.getElementById('btn-nuevo-empleado').addEventListener('click', function () {
		insertar_form();
	});

	document.getElementById('btn-ver-empleados').addEventListener('click', function () {
		insertar_tabla();
	});

	document.getElementById('btn-personal').style.background = 'rgb(43, 43, 43)';
};
inertar_menu();

let insertar_form = function () {
	let formulario_empleado = formulario();
	document.querySelector('#jumbotron-personal').innerHTML = `
		<div class="row">
			<div class="col-lg-12 mt-3">
				<h4>Datos empleado</h4>
			</div>
			<div class="col-lg-12">
				<div class="card mt-2 p-3" style="width: 100%;">	
					${formulario_empleado}
				</div>
			</div>
		</div>
	`;
	document.getElementById('form-empleado').addEventListener('submit', function (e) {
		let datos = postEmpleado();
		empleado.postEmpleado(datos);
		e.preventDefault();
	});

	document.querySelector('.btn-danger').addEventListener('click', function (e) {
		inertar_menu();
	});
};

let insertar_tabla = function () {
	let empleados = empleado.getEmpleados();
	empleados.then(data => {
		tabla_empleados(data);

		let btn_ver = document.getElementsByClassName('ver-empleado');
		for (let i = 0; i < btn_ver.length; i++) {
			const element = btn_ver[i];
			element.onclick = function () {
				verEmpleado(element.id);
			}
		}

		let btn_mod = document.getElementsByClassName('mod-empleado');
		for (let i = 0; i < btn_mod.length; i++) {
			const element = btn_mod[i];
			element.onclick = function () {
				modEmpleado(element.id);
			}
		}

		let btn_eli = document.getElementsByClassName('eli-empleado');
		for (let i = 0; i < btn_eli.length; i++) {
			const element = btn_eli[i];
			element.onclick = function () {
				eliEmpleado(element.id);
			}
		}

		let btn_activar = document.getElementsByClassName('activar');
		for (let i = 0; i < btn_activar.length; i++) {
			const element = btn_activar[i];
			element.onclick = function(){
				let cambio = empleado.cambiarEstatus(this.id, this.checked);
				cambio.then(() => {
					insertar_tabla();
				});
			}
		}

		let regresar = document.getElementById('regresar-menu');
		regresar.onclick = function () {
			inertar_menu();
		};
	});
};

let verEmpleado = function(id){
	let data = empleado.getEmpleado(id);
	data.then(res => {
		console.log(res);
		createModal();
	});
};

let modEmpleado = function (id) {
	let data = empleado.getEmpleado(id);
	data.then(res => {
		console.log(res);
		insertar_form();
	});
};

let eliEmpleado = function (id) {
	let data = empleado.deleteEmpleado(id);
	data.then(() => {
		insertar_tabla();
	});
};