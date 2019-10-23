class Empleado {
	constructor(){
		this.url = 'personal/empleado';
	}

	async postEmpleado(data) {
		fetch(this.url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(data => {
			return;
		});
	}

	async putEmpleado(data) {
		fetch(this.url  , {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(data => {
			return;
		});
	}
	
	async getEmpleados() {
		let response = await fetch(this.url);
		return response.json();
	}

	async getEmpleado(id) {
		let response = await fetch(this.url + '/' + id);
		return response.json();
	}

	async cambiarEstatus(data, cambio){
		let id = data.split('_')[1];
		let response = await fetch(this.url + '/estatus', {
			method: 'POST',
			body: JSON.stringify({ id: id, cambio: cambio }),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(data => {
			return data.json();
		});
	}

	async deleteEmpleado(id){
		await fetch(this.url + '/' + id, { method: 'DELETE' });
		return;
	}

}


module.exports = Empleado;