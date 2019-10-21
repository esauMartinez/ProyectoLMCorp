const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const almacens = new Schema({
    nombre: String,
    direccion: String,
    encargado: String,
    telefono: Number
    // direccion: { type: Date, default: Date.now }
});

const productos = new Schema({
    _id: Schema.Types.ObjectId,
    almacen: String,
    descripcion: String,
    familia: String,
    medida: String,
    proveedor: String,
    entradas: [
        {
            cantidad: Number,
            costo_unidad: Number,
            costo_total: Number,
            iva: Number,
            moneda: String,
            stockActual: Number,
            stockMin: Number,
            stockMax: Number,
            fecha: Date,
            factura: String
        }
    ],
    salidas: [
        {
            nombre: String,
            producto: String,
            cantidad: Number,
            fecha: String,
            idEmpleado: String
        }
    ],
    devoluciones: [
        {
            nombre: String,
            producto: String,
            cantidad: Number,
            fecha: { type:  Date, default: new Date() },
            idEmpleado: String
        }
    ]
});

// const salidas = new Schema({
//     nombre: String,
//     idProducto: String,
//     producto: String,
//     cantidad: Number,
//     fecha: String
// });

const medidas = new Schema({
    medida: String
});

const familias = new Schema({
    familia: String
});

mongoose.model('almacen', almacens);
mongoose.model('producto', productos);
// mongoose.model('entrada', entradas);
mongoose.model('medida', medidas);
mongoose.model('familia', familias);
// mongoose.model('salida', salidas);

mongoose.connect("mongodb://esau:mace930111@ds229078.mlab.com:29078/db_mina", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});