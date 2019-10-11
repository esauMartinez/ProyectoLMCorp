const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarios = new Schema({
    nombre: String,
    username: String,
    password: String
});

mongoose.model('usuario', usuarios);

mongoose.connect("mongodb://localhost/db_mina", { useNewUrlParser: true, useUnifiedTopology: true });