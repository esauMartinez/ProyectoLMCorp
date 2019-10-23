var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/proveedor', async function (req, res, next) {
    let proveedor = mongoose.model('proveedor');
    await proveedor.find({}, '', function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});

router.get('/proveedor/:id', async function (req, res, next) {
    let id = req.params.id;
    let proveedor = mongoose.model('proveedor');
    await proveedor.findById(id, '', function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});

router.post('/proveedor', async function (req, res, next) {
    let proveedor = mongoose.model('proveedor');
    let data = req.body;
    await proveedor.create(data, function (err, data) {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            res.send('ok');
        }
    });
});

router.post('/tipoProveedor', function(req, res){
    let proveedor = mongoose.model('tipoProveedor');
    let data = req.body;
    proveedor.create(data, function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send('ok');
        }
    });
});

router.get('/tipoProveedor', function(req, res){
    let proveedor = mongoose.model('tipoProveedor');
    proveedor.find({}, '', function (err, data) {
        if (err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});



module.exports = router;
