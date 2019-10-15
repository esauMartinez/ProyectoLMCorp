let validar = function () {
	const formulario = document.getElementById('form-unidad');
	let formData = new FormData($("#form-unidad")[0]);

	for (let i = 0; i < formulario.length; i++) {
		const element = formulario[i];
		if (element.required === true && element.value === '') {
			return;
		} 
		// else if (element.required === true && element.type === 'file') {
		// 	formData.append(element.name, element.files[0]);
		// } else if (element.required === true && element.type !== 'file') {
		// 	formData.append(element.name, element.value);
		// }
	}
	return formData;
};

module.exports = validar;