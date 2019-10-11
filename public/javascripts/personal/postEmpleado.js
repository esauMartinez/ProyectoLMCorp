let postEmpleado = function () {
	const formulario = document.getElementById('form-empleado');
	let obj = {};

	for (let i = 0; i < formulario.length; i++) {
		const element = formulario[i];
		if (element.required === true && element.value === '') {
			return;
		} else if (element.required === true) {
			obj[element.name] = element.value;
		}
	}
	
	return obj;
};

module.exports = postEmpleado;