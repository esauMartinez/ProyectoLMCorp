/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/personal/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/personal/form_empleado.js":
/*!******************************************************!*\
  !*** ./public/javascripts/personal/form_empleado.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let formulario = function(){\r\n\tlet form_empleado = `\r\n\t\t<form action=\"#\" id=\"form-empleado\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Nombre/s</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"nombre\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Apellido paterno</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"apellido_paterno\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Apellido materno</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"apellido_materno\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group d-flex justify-content-around\" style=\"margin-top: 45px; margin-bottom: 34px;\">\r\n\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" name=\"sexo\" id=\"Hombre\" value=\"Hombre\">\r\n\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"\">Hombre</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\r\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" name=\"sexo\" id=\"Mujer\" value=\"Mujer\">\r\n\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"\">Mujer</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">RFC</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"rfc\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">CURP</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"curp\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Fecha nacimiento</label>\r\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" name=\"fecha_nac\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">NSS</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"nss\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Nivel escolar</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"nivel_escolar\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">No licencia</label>\r\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"num_licencia\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Vencineto Licencia</label>\r\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" name=\"ven_licencia\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Fecha ingreso</label>\r\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" name=\"fecha_ingreso\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Tipo sangre</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"tipo_sangre\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Edo civil</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"edo_civil\" required>\r\n\t\t\t\t\t\t\t<option value=\"\"></option>\r\n\t\t\t\t\t\t\t<option value=\"1\">Casado/a</option>\r\n\t\t\t\t\t\t\t<option value=\"2\">Divorciado/a</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Telefono</label>\r\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"telefono\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Puesto</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"puesto\" required>\r\n\t\t\t\t\t\t\t<option value=\"\"></option>\r\n\t\t\t\t\t\t\t<option value=\"1\">Supervisor</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Banco</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"banco\" required>\r\n\t\t\t\t\t\t\t<option value=\"\"></option>\r\n\t\t\t\t\t\t\t<option value=\"1\">Banamex</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Num cuenta</label>\r\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"num_cuenta\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Campamento</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"campamento\" required>\r\n\t\t\t\t\t\t\t<option value=\"\"></option>\r\n\t\t\t\t\t\t\t<option value=\"1\">Piedras verdes</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Unidad de trabajo</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"unidad_trabajo\" required>\r\n\t\t\t\t\t\t\t<option value=\"\"></option>\r\n\t\t\t\t\t\t\t<option value=\"1\">Bolivar</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Correo</label>\r\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"correo\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">CP</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"cp_dir\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Colonia</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"colonia\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Calle</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"calle\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">No Exterior</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"num_ext\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">No Interior</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"num_int\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Pais</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"pais\" required>\r\n\t\t\t\t\t\t\t<option value=\"\"></option>\r\n\t\t\t\t\t\t\t<option value=\"1\">Mexico</option>\r\n\t\t\t\t\t\t\t<option value=\"2\">Estados unidos</option>\r\n\t\t\t\t\t\t\t<option value=\"3\">Canada</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Estado</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"estado\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Municipio</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"municipio\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Localidad</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"poblacion\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"div-msj\"></div>\r\n\t\t\t<div class=\"row mt-2\">\r\n\t\t\t\t<div class=\"col-lg-2 offset-lg-2\"><button type=\"button\" class=\"btn btn-warning btn-block\">Imprimir</button></div>\r\n\t\t\t\t<div class=\"col-lg-2\"><button type=\"button\" class=\"btn btn-dark btn-block\">Datos familiares</button></div>\r\n\t\t\t\t<div class=\"col-lg-2\"><button type=\"button\" class=\"btn btn-success btn-block\">Documentacion</button></div>\r\n\t\t\t\t<div class=\"col-lg-2\"><button type=\"button\" class=\"btn btn-danger btn-block\">Cancelar</button></div>\r\n\t\t\t\t<div class=\"col-lg-2\"><button type=\"submit\" class=\"btn btn-primary btn-block btn-deshabilitar\">Guardar</button></div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t`;\t\r\n\treturn form_empleado;\r\n};\r\n\r\nmodule.exports = formulario;\n\n//# sourceURL=webpack:///./public/javascripts/personal/form_empleado.js?");

/***/ }),

/***/ "./public/javascripts/personal/index.js":
/*!**********************************************!*\
  !*** ./public/javascripts/personal/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./personal.js */ \"./public/javascripts/personal/personal.js\");\n/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_personal_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_empleado_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_empleado.js */ \"./public/javascripts/personal/form_empleado.js\");\n/* harmony import */ var _form_empleado_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_empleado_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./public/javascripts/personal/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _postEmpleado_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postEmpleado.js */ \"./public/javascripts/personal/postEmpleado.js\");\n/* harmony import */ var _postEmpleado_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_postEmpleado_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tabla_empleados_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabla_empleados.js */ \"./public/javascripts/personal/tabla_empleados.js\");\n/* harmony import */ var _tabla_empleados_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tabla_empleados_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet empleado = new _personal_js__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n\r\nlet inertar_menu = function(){\r\n\t_menu_js__WEBPACK_IMPORTED_MODULE_2___default()();\r\n\tdocument.getElementById('btn-nuevo-empleado').addEventListener('click', function () {\r\n\t\tinsertar_form();\r\n\t});\r\n\r\n\tdocument.getElementById('btn-ver-empleados').addEventListener('click', function () {\r\n\t\tinsertar_tabla();\r\n\t});\r\n\r\n\tdocument.getElementById('btn-personal').style.background = 'rgb(43, 43, 43)';\r\n};\r\ninertar_menu();\r\n\r\nlet insertar_form = function () {\r\n\tlet formulario_empleado = _form_empleado_js__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\tdocument.querySelector('#jumbotron-personal').innerHTML = `\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12 mt-3\">\r\n\t\t\t\t<h4>Datos empleado</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"card mt-2 p-3\" style=\"width: 100%;\">\t\r\n\t\t\t\t\t${formulario_empleado}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t`;\r\n\r\n\tdocument.getElementById('form-empleado').addEventListener('submit', function (e) {\r\n\t\tlet datos = _postEmpleado_js__WEBPACK_IMPORTED_MODULE_3___default()();\r\n\t\tlet crear = empleado.postEmpleado(datos);\r\n\t\tcrear.then(() => {\r\n\t\t\tdocument.querySelector('.div-msj').innerHTML = `\r\n\t\t\t\t<div class=\"alert alert-success\" role=\"alert\">\r\n\t\t\t\t\tEmpleado creado\r\n\t\t\t\t</div>\r\n\t\t\t`;\r\n\t\t});\r\n\t\te.preventDefault();\r\n\t});\r\n\r\n\tdocument.querySelector('.btn-danger').addEventListener('click', function (e) {\r\n\t\tinertar_menu();\r\n\t});\r\n};\r\n\r\nlet insertar_tabla = function () {\r\n\tlet empleados = empleado.getEmpleados();\r\n\templeados.then(data => {\r\n\t\t_tabla_empleados_js__WEBPACK_IMPORTED_MODULE_4___default()(data);\r\n\r\n\t\tlet btn_ver = document.getElementsByClassName('ver-empleado');\r\n\t\tfor (let i = 0; i < btn_ver.length; i++) {\r\n\t\t\tconst element = btn_ver[i];\r\n\t\t\telement.onclick = function () {\r\n\t\t\t\tverEmpleado(element.id);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet btn_mod = document.getElementsByClassName('mod-empleado');\r\n\t\tfor (let i = 0; i < btn_mod.length; i++) {\r\n\t\t\tconst element = btn_mod[i];\r\n\t\t\telement.onclick = function () {\r\n\t\t\t\tmodEmpleado(element.id);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet btn_eli = document.getElementsByClassName('eli-empleado');\r\n\t\tfor (let i = 0; i < btn_eli.length; i++) {\r\n\t\t\tconst element = btn_eli[i];\r\n\t\t\telement.onclick = function () {\r\n\t\t\t\teliEmpleado(element.id);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet btn_activar = document.getElementsByClassName('activar');\r\n\t\tfor (let i = 0; i < btn_activar.length; i++) {\r\n\t\t\tconst element = btn_activar[i];\r\n\t\t\telement.onclick = function(){\r\n\t\t\t\tlet cambio = empleado.cambiarEstatus(this.id, this.checked);\r\n\t\t\t\tcambio.then(() => {\r\n\t\t\t\t\tinsertar_tabla();\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet regresar = document.getElementById('regresar-menu');\r\n\t\tregresar.onclick = function () {\r\n\t\t\tinertar_menu();\r\n\t\t};\r\n\t});\r\n};\r\n\r\nlet verEmpleado = function(id){\r\n\tlet data = empleado.getEmpleado(id);\r\n\tdata.then(res => {\r\n\t\tlet formulario_empleado = _form_empleado_js__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\t\tdocument.querySelector('#jumbotron-personal').innerHTML = `\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 mt-3\">\r\n\t\t\t\t\t<h4>Datos empleado</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<div class=\"card mt-2 p-3\" style=\"width: 100%;\">\t\r\n\t\t\t\t\t\t${formulario_empleado}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t\treturn res;\r\n\t}).then(data => {\r\n\t\tconst formulario = document.getElementById('form-empleado');\r\n\t\tfor (let i = 0; i < formulario.length; i++) {\r\n\t\t\tconst element = formulario[i];\r\n\t\t\tfor (var j in data) {\r\n\t\t\t\tif (j === element.name) {\r\n\t\t\t\t\tswitch (element.type) {\r\n\t\t\t\t\t\tcase 'text':\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'date':\r\n\t\t\t\t\t\t\tlet f = data[j].split('T')[0];\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = f;\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'number':\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'select-one':\r\n\t\t\t\t\t\t\tdocument.querySelector(`select[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'email':\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\tdocument.querySelector(`textarea`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\tdocument.querySelector('.btn-deshabilitar').disabled = true;\r\n\r\n\t\tdocument.querySelector('.btn-danger').addEventListener('click', function (e) {\r\n\t\t\tinsertar_tabla();\r\n\t\t});\r\n\t});\r\n};\r\n\r\nlet modEmpleado = function (id) {\r\n\tlet data = empleado.getEmpleado(id);\r\n\tdata.then(data => {\r\n\t\tlet formulario_empleado = _form_empleado_js__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\t\tdocument.querySelector('#jumbotron-personal').innerHTML = `\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-12 mt-3\">\r\n\t\t\t\t\t<h4>Datos empleado</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<div class=\"card mt-2 p-3\" style=\"width: 100%;\">\t\r\n\t\t\t\t\t\t${formulario_empleado}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\t\treturn data;\r\n\t}).then(data => {\r\n\t\tconst formulario = document.getElementById('form-empleado');\r\n\t\tfor (let i = 0; i < formulario.length; i++) {\r\n\t\t\tconst element = formulario[i];\r\n\t\t\tfor (var j in data) {\r\n\t\t\t\tif (j === element.name) {\r\n\t\t\t\t\tswitch (element.type) {\r\n\t\t\t\t\t\tcase 'text':\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'date':\r\n\t\t\t\t\t\t\tlet f = data[j].split('T')[0];\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = f;\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'number':\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'select-one':\r\n\t\t\t\t\t\t\tdocument.querySelector(`select[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tcase 'email':\r\n\t\t\t\t\t\t\tdocument.querySelector(`input[name=${j}]`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t\tdefault:\r\n\t\t\t\t\t\t\tdocument.querySelector(`textarea`).value = data[j];\r\n\t\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet id = data._id;\r\n\r\n\t\tdocument.getElementById('form-empleado').addEventListener('submit', function (e) {\r\n\t\t\tlet datos = _postEmpleado_js__WEBPACK_IMPORTED_MODULE_3___default()();\r\n\t\t\tdatos.id = id;\r\n\r\n\t\t\tlet mod = empleado.putEmpleado(datos);\r\n\t\t\tmod.then(() => {\r\n\t\t\t\tdocument.querySelector('.div-msj').innerHTML = `\r\n\t\t\t\t\t<div class=\"alert alert-success\" role=\"alert\">\r\n\t\t\t\t\t\tEmpleado modificado\r\n\t\t\t\t\t</div>\r\n\t\t\t\t`;\r\n\t\t\t});\r\n\r\n\t\t\te.preventDefault();\r\n\t\t});\r\n\r\n\t\tdocument.querySelector('.btn-danger').addEventListener('click', function (e) {\r\n\t\t\tinsertar_tabla();\r\n\t\t});\r\n\t});\r\n};\r\n\r\nlet eliEmpleado = function (id) {\r\n\tlet data = empleado.deleteEmpleado(id);\r\n\tdata.then(() => {\r\n\t\tinsertar_tabla();\r\n\t});\r\n};\n\n//# sourceURL=webpack:///./public/javascripts/personal/index.js?");

/***/ }),

/***/ "./public/javascripts/personal/menu.js":
/*!*********************************************!*\
  !*** ./public/javascripts/personal/menu.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let menu = function(){\r\n\tdocument.querySelector('#jumbotron-personal').innerHTML =`\r\n        <div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<h4>Menu personal</h4>                       \r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t<div class=\"card mt-3\">\r\n\t\t\t\t\t<div class=\"mt-3 d-flex justify-content-center align-itemns-center\">\r\n\t\t\t\t\t\t<i class=\"fa fa-user-plus\" style=\"font-size: 64px;\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"row d-flex justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-block\" id=\"btn-ver-empleados\">Lista empleados</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t<div class=\"card mt-3\" style=\"width: 100%;\">\r\n\t\t\t\t\t<div class=\"mt-3 d-flex justify-content-center align-itemns-center\">\r\n\t\t\t\t\t\t<i class=\"fa fa-users\" style=\"font-size: 64px;\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"row d-flex justify-content-center\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-block\" id=\"btn-nuevo-empleado\">Alta empleado</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t`;\t\r\n};\r\n\r\nmodule.exports = menu;\n\n//# sourceURL=webpack:///./public/javascripts/personal/menu.js?");

/***/ }),

/***/ "./public/javascripts/personal/personal.js":
/*!*************************************************!*\
  !*** ./public/javascripts/personal/personal.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Empleado {\r\n\tconstructor(){\r\n\t\tthis.url = 'personal/empleado';\r\n\t}\r\n\r\n\tasync postEmpleado(data) {\r\n\t\tfetch(this.url, {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: JSON.stringify(data),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t}).then(data => {\r\n\t\t\treturn;\r\n\t\t});\r\n\t}\r\n\r\n\tasync putEmpleado(data) {\r\n\t\tfetch(this.url  , {\r\n\t\t\tmethod: 'PUT',\r\n\t\t\tbody: JSON.stringify(data),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t}).then(data => {\r\n\t\t\treturn;\r\n\t\t});\r\n\t}\r\n\t\r\n\tasync getEmpleados() {\r\n\t\tlet response = await fetch(this.url);\r\n\t\treturn response.json();\r\n\t}\r\n\r\n\tasync getEmpleado(id) {\r\n\t\tlet response = await fetch(this.url + '/' + id);\r\n\t\treturn response.json();\r\n\t}\r\n\r\n\tasync cambiarEstatus(data, cambio){\r\n\t\tlet id = data.split('_')[1];\r\n\t\tlet response = await fetch(this.url + '/estatus', {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: JSON.stringify({ id: id, cambio: cambio }),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t}).then(data => {\r\n\t\t\treturn data.json();\r\n\t\t});\r\n\t}\r\n\r\n\tasync deleteEmpleado(id){\r\n\t\tawait fetch(this.url + '/' + id, { method: 'DELETE' });\r\n\t\treturn;\r\n\t}\r\n\r\n}\r\n\r\n\r\nmodule.exports = Empleado;\n\n//# sourceURL=webpack:///./public/javascripts/personal/personal.js?");

/***/ }),

/***/ "./public/javascripts/personal/postEmpleado.js":
/*!*****************************************************!*\
  !*** ./public/javascripts/personal/postEmpleado.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let postEmpleado = function () {\r\n\tconst formulario = document.getElementById('form-empleado');\r\n\tlet obj = {};\r\n\r\n\tfor (let i = 0; i < formulario.length; i++) {\r\n\t\tconst element = formulario[i];\r\n\t\tif (element.required === true && element.value === '') {\r\n\t\t\treturn;\r\n\t\t} else if (element.required === true) {\r\n\t\t\tobj[element.name] = element.value;\r\n\t\t}\r\n\t}\r\n\t\r\n\treturn obj;\r\n};\r\n\r\nmodule.exports = postEmpleado;\n\n//# sourceURL=webpack:///./public/javascripts/personal/postEmpleado.js?");

/***/ }),

/***/ "./public/javascripts/personal/tabla_empleados.js":
/*!********************************************************!*\
  !*** ./public/javascripts/personal/tabla_empleados.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let tabla_empleados = function(data){\r\n\tdocument.querySelector('#jumbotron-personal').innerHTML = `\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12 table-responsive\">\r\n\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t<thead class=\"thead-dark\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Nombre</th>\r\n\t\t\t\t\t\t\t<th>Rfc</th>\r\n\t\t\t\t\t\t\t<th>Curp</th>\r\n\t\t\t\t\t\t\t<th>Puesto</th>\r\n\t\t\t\t\t\t\t<th>Campamento</th>\r\n\t\t\t\t\t\t\t<th>Unidad Trabajo</th>\r\n\t\t\t\t\t\t\t<th>Estado</th>\r\n\t\t\t\t\t\t\t<th>Municipio</th>\r\n\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id=\"tb-empleados\"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-2 offset-lg-10 mt-3\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" id=\"regresar-menu\">Cancelar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t`;\r\n\r\n\tdata.forEach(element => {\r\n\t\tdocument.getElementById('tb-empleados').innerHTML += `\r\n\t\t\t<tr>\r\n\t\t\t\t<td>${element.nombre} ${element.apellido_paterno} ${element.apellido_materno}</td>\r\n\t\t\t\t<td>${element.rfc}</td>\r\n\t\t\t\t<td>${element.curp}</td>\r\n\t\t\t\t<td>${element.puesto}</td>\r\n\t\t\t\t<td>${element.campamento}</td>\r\n\t\t\t\t<td>${element.unidad_trabajo}</td>\r\n\t\t\t\t<td>${element.estado}</td>\r\n\t\t\t\t<td>${element.municipio}</td>\r\n\t\t\t\t<td id='_${element._id}'></td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary ver-empleado\" id=\"${element._id}\">Ver</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-warning mod-empleado\" id=\"${element._id}\">Modificar</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-danger eli-empleado\" id=\"${element._id}\">Eliminar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t`;\r\n\r\n\t\tif (element.activo === true) {\r\n\t\t\tdocument.getElementById(`_${element._id}`).innerHTML = `\r\n\t\t\t\t<div class=\"custom-control custom-switch\">\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input activar\" id=\"id_${element._id}\" checked>\r\n\t\t\t\t\t<label class=\"custom-control-label\" for=\"id_${element._id}\">Activo</label>\r\n\t\t\t\t</div>\r\n\t\t\t`;\r\n\t\t} else {\r\n\t\t\tdocument.getElementById(`_${element._id}`).innerHTML = `\r\n\t\t\t\t<div class=\"custom-control custom-switch\">\r\n\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input activar\" id=\"id_${element._id}\">\r\n\t\t\t\t\t<label class=\"custom-control-label\" for=\"id_${element._id}\">Inactivo</label>\r\n\t\t\t\t</div>\r\n\t\t\t`;\r\n\t\t}\r\n\t});\r\n\tdescargarExcel();\r\n\tformat_table();\r\n};\r\n\r\nmodule.exports = tabla_empleados;\n\n//# sourceURL=webpack:///./public/javascripts/personal/tabla_empleados.js?");

/***/ })

/******/ });