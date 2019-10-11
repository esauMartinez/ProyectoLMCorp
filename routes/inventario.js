var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Querys para almacen
router.post('/almacen', async function(req, res, next){
    let almacen = mongoose.model('almacen');
    let data = req.body;
    await almacen.create(data, function(err, data){
        if (err) {
            res.send('error');
        } else {
            res.send('ok');
        }
    });
});

router.get('/almacen', async function (req, res, next) {
    let almacen = mongoose.model('almacen');
    await almacen.find({},'nombre direccion encargado telefono', function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});

router.get('/almacen/:id', function (req, res, next) {
    let almacen = mongoose.model('almacen');
    let id = req.params.id;

    almacen.findById(id, '').exec(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

router.delete('/almacen/:id', function (req, res, next) {
    let almacen = mongoose.model('almacen');
    let id = req.params.id;

    almacen.findByIdAndRemove(id, '').exec(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.send(data);
        }
    });
});

// Querys para producto
router.post('/producto', async function(req, res, next){
    let producto = mongoose.model('producto');
    let data = req.body;
    await producto.create(
        { 
            _id: new mongoose.Types.ObjectId(), 
            almacen: data.almacen, 
            descripcion: data.descripcion, 
            familia: data.familia, 
            medida: data.medida,
            proveedor: '', 
            entradas: [
                { 
                    cantidad: 0,
                    costo_unidad: 0,
                    costo_total: 0,
                    iva: 0,
                    moneda: 'Mxn',
                    stockActual: 0,
                    stockMin: 0,
                    stockMax: 0,
                    fecha: new Date(),
                    factura: ''
                }
            ]
        }, 
        function(err, data){
            if (err) {
                res.send('error');
            } else {
                res.send('ok');
            }
        }
    );
});

router.get('/producto', async function (req, res, next) {
    let producto = mongoose.model('producto');
    await producto.find({},'', function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});

// Querys entradas
router.post('/existencia', function(req,res){
    console.log(req.body);
});


// Querys para medida
router.post('/medida', function (req, res) {
    let medida = mongoose.model('medida');
    let data = req.body;
    medida.create(data, function(err, data){
        if (err) {
            res.send('error');
        }else {
            res.send('ok');
        }
    });
});

router.get('/medida', async function(req, res){
    let medida = mongoose.model('medida');
    await medida.find({}, '', function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});


// Query para familia
router.post('/familia', function (req, res) {
    let familia = mongoose.model('familia');
    let data = req.body;
    familia.create(data, function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send('ok');
        }
    });
});

router.get('/familia', async function (req, res) {
    let familia = mongoose.model('familia');
    await familia.find({}, '', function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});


module.exports = router;
