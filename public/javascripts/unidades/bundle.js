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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/javascripts/unidades/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/javascripts/unidades/form.js":
/*!*********************************************!*\
  !*** ./public/javascripts/unidades/form.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let formulario = function(){\r\n\tlet form = `\r\n\t\t<form action=\"#\" id=\"form-unidad\" enctype=\"multipart/form-data\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Num economico</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"num_economico\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Tipo</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"tipo\" required>\r\n\t\t\t\t\t\t\t<option value=\"jumbo\">Jumbo</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-1\">\r\n\t\t\t\t\t<div class=\"form-group mt-4\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Condicion</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"condicion\" required>\r\n\t\t\t\t\t\t\t<option value=\"nevo\">Nuevo</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-1\">\r\n\t\t\t\t\t<div class=\"form-group mt-4\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Placas</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"placas\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Marca</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"marca\" required>\r\n\t\t\t\t\t\t\t<option value=\"ford\">Ford</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-1\">\r\n\t\t\t\t\t<div class=\"form-group mt-4\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Modelo</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"modelo\" required>\r\n\t\t\t\t\t\t\t<option value=\"silverado\">Silverado</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-1\">\r\n\t\t\t\t\t<div class=\"form-group mt-4\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-2\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Color</label>\r\n\t\t\t\t\t\t<input type=\"color\" class=\"form-control\" name=\"color\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Combustible</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"combustible\" required>\r\n\t\t\t\t\t\t\t<option value=\"diesel\">Diesel</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-1\">\r\n\t\t\t\t\t<div class=\"form-group mt-4\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Adquisicion</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"adquisicion\" required>\r\n\t\t\t\t\t\t\t<option value=\"propia\">Propia</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-1\">\r\n\t\t\t\t\t<div class=\"form-group mt-4\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-block\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Km inicial</label>\r\n\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" name=\"km_inicial\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Poliza de seguro</label>\r\n\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" name=\"poliza\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Vencimiento de poliza</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"ven_poliza\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Fecha adquisicion</label>\r\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" name=\"fecha_adquisicion\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"\">Foto</label>\r\n\t\t\t\t\t\t<input type=\"file\" class=\"form-control\" name=\"foto\" required>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 offset-lg-6\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-danger btn-block\" id=\"btn-cancelar\">Cancelar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\">Aceptar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t`;\r\n\r\n\treturn form;\r\n};\r\n\r\nmodule.exports = formulario;\n\n//# sourceURL=webpack:///./public/javascripts/unidades/form.js?");

/***/ }),

/***/ "./public/javascripts/unidades/index.js":
/*!**********************************************!*\
  !*** ./public/javascripts/unidades/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./public/javascripts/unidades/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./public/javascripts/unidades/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _validar_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validar_form.js */ \"./public/javascripts/unidades/validar_form.js\");\n/* harmony import */ var _validar_form_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_validar_form_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _unidad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unidad.js */ \"./public/javascripts/unidades/unidad.js\");\n/* harmony import */ var _unidad_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_unidad_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tabla_unidades_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabla_unidades.js */ \"./public/javascripts/unidades/tabla_unidades.js\");\n/* harmony import */ var _tabla_unidades_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tabla_unidades_js__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet unidad = new _unidad_js__WEBPACK_IMPORTED_MODULE_3___default.a;\r\n\r\nlet insertar_menu = function(){\r\n\t_menu_js__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\tdocument.getElementById('btn-lista-unidades').addEventListener('click', function () {\r\n\t\ttabla();\r\n\t});\r\n\t\r\n\tdocument.getElementById('btn-alta-unidad').addEventListener('click', function () {\r\n\t\tinsertar_form();\r\n\t});\r\n\r\n\tdocument.getElementById('btn-unidades').style.background = 'rgb(43, 43, 43)';\r\n};\r\ninsertar_menu();\r\n\r\nlet insertar_form = function(){\r\n\tlet form = _form_js__WEBPACK_IMPORTED_MODULE_1___default()();\r\n\tdocument.querySelector('#jumbotron-unidad').innerHTML = `\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12 mt-3\">\r\n\t\t\t\t<h4>Datos unidad</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t<div class=\"card mt-2 p-3\" style=\"width: 100%;\">\t\r\n\t\t\t\t\t${form}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t`;\r\n\r\n\tdocument.getElementById('form-unidad').addEventListener('submit', function (e) {\r\n\t\tlet datos = _validar_form_js__WEBPACK_IMPORTED_MODULE_2___default()();\r\n\t\tunidad.postUnidad(datos);\r\n\t\te.preventDefault();\r\n\t});\r\n\r\n\tdocument.getElementById('btn-cancelar').addEventListener('click', function (e) {\r\n\t\tinsertar_menu();\r\n\t});\r\n\r\n\tdocument.querySelector('input[name=poliza]').addEventListener('change', function () {\r\n\t\tlet ext_poliza = (this.files[0].name).split('.');\r\n\t\tif (ext_poliza[1] !== 'pdf') {\r\n\t\t\tcreateModal();\r\n\t\t\tdocument.querySelector('.modal-title').innerHTML = 'Tipo extencion';\r\n\t\t\tdocument.querySelector('.modal-body').innerHTML = `\r\n\t\t\t\t<h4>La extencion del archivo no se permite</h4>\r\n\t\t\t`;\r\n\t\t\tthis.value = '';\r\n\t\t}\r\n\t});\r\n\r\n\tlet extenciones_img = ['jpg', 'png'];\r\n\tdocument.querySelector('input[name=foto]').addEventListener('change', function () {\r\n\t\tlet ext_imagen = (this.files[0].name).split('.');\r\n\t\tlet res = extenciones_img.indexOf(ext_imagen[1]);\r\n\t\tif (res === -1) {\r\n\t\t\tcreateModal();\r\n\t\t\tdocument.querySelector('.modal-title').innerHTML = 'Tipo extencion';\r\n\t\t\tdocument.querySelector('.modal-body').innerHTML = `\r\n\t\t\t\t<h4>La extencion del archivo no se permite</h4>\r\n\t\t\t`;\r\n\t\t\tthis.value = '';\r\n\t\t}\r\n\t});\r\n\r\n\tdocument.querySelector('.btn-danger').addEventListener('click', function (e) {\r\n\t\tinertar_menu();\r\n\t});\r\n};\r\n\r\nlet tabla = function(){\r\n\tlet data = unidad.getUnidades();\r\n\tdata.then(res => {\r\n\t\t_tabla_unidades_js__WEBPACK_IMPORTED_MODULE_4___default()(res);\r\n\t\tlet btn_ver = document.getElementsByClassName('ver-unidad');\r\n\t\tfor (let i = 0; i < btn_ver.length; i++) {\r\n\t\t\tconst element = btn_ver[i];\r\n\t\t\telement.onclick = function () {\r\n\t\t\t\tverUnidad(element.id);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet btn_mod = document.getElementsByClassName('mod-unidad');\r\n\t\tfor (let i = 0; i < btn_mod.length; i++) {\r\n\t\t\tconst element = btn_mod[i];\r\n\t\t\telement.onclick = function () {\r\n\t\t\t\tmodUnidad(element.id);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tlet regresar = document.getElementById('regresar-menu');\r\n\t\tregresar.onclick = function () {\r\n\t\t\tinsertar_menu();\r\n\t\t};\r\n\t});\r\n};\r\n\r\nlet verUnidad = function (id) {\r\n\tlet data = unidad.getUnidad(id);\r\n\tdata.then(res => {\r\n\t\tconsole.log(res);\r\n\t\tcreateModal();\r\n\t});\r\n};\r\n\r\nlet modUnidad = function (id) {\r\n\tlet data = unidad.getUnidad(id);\r\n\tdata.then(res => {\r\n\t\tconsole.log(res);\r\n\t\tinsertar_form();\r\n\t});\r\n};\r\n\r\nlet eliUnidad= function (id) {\r\n\tlet data = empleado.deleteEmpleado(id);\r\n\tdata.then(() => {\r\n\t\tinsertar_tabla();\r\n\t});\r\n};\n\n//# sourceURL=webpack:///./public/javascripts/unidades/index.js?");

/***/ }),

/***/ "./public/javascripts/unidades/menu.js":
/*!*********************************************!*\
  !*** ./public/javascripts/unidades/menu.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let menu = function() {\r\n\tdocument.querySelector('#jumbotron-unidad').innerHTML = `\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h4>Menu unidad</h4>                       \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"card mt-3\">\r\n                    <div class=\"mt-3 d-flex justify-content-center align-itemns-center\">\r\n                        <i class=\"fa fa-truck\" style=\"font-size: 64px;\"></i>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row d-flex justify-content-center\">\r\n                            <div class=\"col-lg-6\">\r\n                                <a href=\"#\" class=\"btn btn-primary btn-block\" id=\"btn-lista-unidades\">Lista unidades</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"card mt-3\" style=\"width: 100%;\">\r\n                    <div class=\"mt-3 d-flex justify-content-center align-itemns-center\">\r\n                        <i class=\"fa fa-clipboard-list\" style=\"font-size: 64px;\"></i>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row d-flex justify-content-center\">\r\n                            <div class=\"col-lg-6\">\r\n                                <a href=\"#\" class=\"btn btn-primary btn-block\" id=\"btn-alta-unidad\">Alta unidad</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n};\r\n\r\nmodule.exports = menu;\n\n//# sourceURL=webpack:///./public/javascripts/unidades/menu.js?");

/***/ }),

/***/ "./public/javascripts/unidades/tabla_unidades.js":
/*!*******************************************************!*\
  !*** ./public/javascripts/unidades/tabla_unidades.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let tabla_unidades = function (data) {\r\n\tdocument.querySelector('#jumbotron-unidad').innerHTML = `\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-12 table-responsive\">\r\n\t\t\t\t<table class=\"table table-bordered\">\r\n\t\t\t\t\t<thead class=\"thead-dark\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>No economico</th>\r\n\t\t\t\t\t\t\t<th>Tipo</th>\r\n\t\t\t\t\t\t\t<th>Condicion</th>\r\n\t\t\t\t\t\t\t<th>Placas</th>\r\n\t\t\t\t\t\t\t<th>Marca</th>\r\n\t\t\t\t\t\t\t<th>Modelo</th>\r\n\t\t\t\t\t\t\t<th>Color</th>\r\n\t\t\t\t\t\t\t<th>Combustible</th>\r\n\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody id=\"tb-unidades\"></tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-lg-2 offset-lg-10 mt-3\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" id=\"regresar-menu\">Cancelar</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t`;\r\n\r\n\tdata.forEach(element => {\r\n\t\tdocument.getElementById('tb-unidades').innerHTML += `\r\n\t\t\t<tr>\r\n\t\t\t\t<td>${element.economico}</td>\r\n\t\t\t\t<td>${element.tipo}</td>\r\n\t\t\t\t<td>${element.condicion}</td>\r\n\t\t\t\t<td>${element.placas}</td>\r\n\t\t\t\t<td>${element.marca}</td>\r\n\t\t\t\t<td>${element.modelo}</td>\r\n\t\t\t\t<td id=\"color-td${element._id}\"></td>\r\n\t\t\t\t<td>${element.combustible}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\"d-flex justify-content-between\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary ver-unidad\" id=\"${element._id}\">Ver</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-warning mod-unidad\" id=\"${element._id}\">Modificar</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-danger eli-unidad\" id=\"${element._id}\">Eliminar</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t`;\r\n\r\n\t\tdocument.getElementById('color-td'+element._id+'').innerHTML = `\r\n\t\t\t<input type=\"color\" value=\"${element.color}\">\r\n\t\t`;\r\n\t});\r\n};\r\n\r\nmodule.exports = tabla_unidades;\n\n//# sourceURL=webpack:///./public/javascripts/unidades/tabla_unidades.js?");

/***/ }),

/***/ "./public/javascripts/unidades/unidad.js":
/*!***********************************************!*\
  !*** ./public/javascripts/unidades/unidad.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Unidad{\r\n\tconstructor() {\r\n\t\tthis.url = 'unidad/unidad';\r\n\t}\r\n\r\n\tasync postUnidad(data) {\r\n\t\t$.ajax({\r\n\t\t\turl: this.url,\r\n\t\t\ttype: \"post\",\r\n\t\t\tdataType: 'JSON',\r\n\t\t\tdata: data,\r\n\t\t\tcontentType: false,\r\n\t\t\tprocessData: false,\r\n\t\t\tsuccess: function (data) {\r\n\t\t\t\tconsole.log(data)\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tasync getUnidades(){\r\n\t\tlet response = await fetch(this.url);\r\n\t\treturn response.json();\r\n\t}\r\n\r\n\tasync getUnidad(id) {\r\n\t\tlet response = await fetch(this.url + '/' + id);\r\n\t\treturn response.json();\r\n\t}\r\n}\r\n\r\nmodule.exports = Unidad;\n\n//# sourceURL=webpack:///./public/javascripts/unidades/unidad.js?");

/***/ }),

/***/ "./public/javascripts/unidades/validar_form.js":
/*!*****************************************************!*\
  !*** ./public/javascripts/unidades/validar_form.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let validar = function () {\r\n\tconst formulario = document.getElementById('form-unidad');\r\n\tlet formData = new FormData($(\"#form-unidad\")[0]);\r\n\r\n\tfor (let i = 0; i < formulario.length; i++) {\r\n\t\tconst element = formulario[i];\r\n\t\tif (element.required === true && element.value === '') {\r\n\t\t\treturn;\r\n\t\t} \r\n\t\t// else if (element.required === true && element.type === 'file') {\r\n\t\t// \tformData.append(element.name, element.files[0]);\r\n\t\t// } else if (element.required === true && element.type !== 'file') {\r\n\t\t// \tformData.append(element.name, element.value);\r\n\t\t// }\r\n\t}\r\n\treturn formData;\r\n};\r\n\r\nmodule.exports = validar;\n\n//# sourceURL=webpack:///./public/javascripts/unidades/validar_form.js?");

/***/ })

/******/ });