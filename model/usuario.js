const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarios = new Schema({
    nombre: String,
    username: String,
    password: String
});

mongoose.model('usuario', usuarios);

mongoose.connect("mongodb://esau:mace930111@ds229078.mlab.com:29078/db_mina", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// mongoose.connect("mongodb://localhost/db_mina", { useNewUrlParser: true, useUnifiedTopology: true });