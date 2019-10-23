const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unidades = new Schema({
	economico: Number,
	tipo: String,
	condicion: String,
	placas: String,
	marca: String,
	modelo: String,
	color: String,
	combustible: String,
	adquisicion: String,
	km_inicial: Number,
	poliza_seguro: String,
	vencimiento: String,
	fecha_adquisicion: Date,
	foto: String
});

mongoose.model('unidad', unidades);

mongoose.connect("mongodb://esau:mace930111@ds229078.mlab.com:29078/db_mina", {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
// mongoose.connect("mongodb://localhost/db_mina", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });