const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const empleados = new Schema({
	nombre: String,
	apellido_paterno: String,
	apellido_materno: String,
	rfc: String,
	curp: String,
	fecha_nac: Date,
	sexo: String,
	nss: String,
	nivel_escolar: String,
	num_licencia: Number,
	ven_licencia: Date,
	fecha_ingreso: Date,
	tipo_sangre: String,
	edo_civil: String,
	telefono: Number,
	puesto: String,
	banco: String,
	num_cuenta: Number,
	campamento: String,
	unidad_trabajo: String,
	correo: String,
	activo: Boolean,
	calle: String,
	num_ext: String,
	num_int: String,
	cp_dir: Number,
	colonia: String,
	estado: String,
	municipio: String,
	pais: String,
	poblacion: String
});

// const direccions = new Schema({
	
// 	id_empleado: String
// });

const familiares = new Schema({
	nombre: String,
	paterno: String,
	materno: String,
	parentezco: String,
	direccion: String,
	telefono: String,
	id_empleado: String
});

const credencials = new Schema({
	credencial: String,
	id_empleado: String
});

mongoose.model('empleado', empleados);
// mongoose.model('direccion', direccions);
mongoose.model('familiares', familiares);
mongoose.model('credencial', credencials);

mongoose.connect("mongodb://localhost/db_mina", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});