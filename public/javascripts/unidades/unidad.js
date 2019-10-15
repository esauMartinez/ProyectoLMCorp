class Unidad{
	constructor() {
		this.url = 'unidad/unidad';
	}

	async postUnidad(data) {
		$.ajax({
			url: this.url,
			type: "post",
			dataType: 'JSON',
			data: data,
			contentType: false,
			processData: false,
			success: function (data) {
				console.log(data)
			}
		});
	}

	async getUnidades(){
		let response = await fetch(this.url);
		return response.json();
	}

	async getUnidad(id) {
		let response = await fetch(this.url + '/' + id);
		return response.json();
	}
}

module.exports = Unidad;