const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const proveedores = new Schema({
    clave: Number,
    telefono: Number,
    proveedor: String,
    contacto: String,
    razon_social: String,
    fecha_ing: Date,
    rfc: Number,
    correo: String,
    tipo_proveedor: String,
    pag_web: String,
    calle: String,
    pais: String,
    cp: Number,
    estado: String,
    colonia: String,
    municipio: String,
    no_ext: String,
    delegacion: String,
    credito: Number,
    lim_credito: Number,
    cond_pago: String,
    tipo_moneda: String,
    descuento: Number,
    iva: Number,
    observaciones: String,
    estatus: Boolean
});

const tipoProveedors = new Schema({
    tipo: String
});

mongoose.model('proveedor', proveedores);
mongoose.model('tipoProveedor', tipoProveedors);

mongoose.connect("mongodb://esau:mace930111@ds229078.mlab.com:29078/db_mina", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// mongoose.connect("mongodb://localhost/db_mina", { useNewUrlParser: true, useUnifiedTopology: true });