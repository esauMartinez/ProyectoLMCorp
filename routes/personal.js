var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Querys para almacen
router.post('/empleado', async function (req, res, next) {
	let empleado = mongoose.model('empleado');
	let data = req.body;
	console.log(data);
	await empleado.create(data, function (err, data) {
		if (err) {
			res.send('error');
		} else {
			res.send('ok');
		}
	});
});

router.put('/empleado', async function (req, res, next) {
	let empleado = mongoose.model('empleado');
	let data = req.body;

	empleado.findByIdAndUpdate(data.id, data, function (err, data) {
        if (err) {
            console.log(err);
        }else {
            res.send(data);
        }
    });
});

router.get('/empleado', async function (req, res, next) {
	let empleado = mongoose.model('empleado');
	await empleado.find({}, function (err, data) {
		if (err) {
			res.send('error');
		} else {
			res.send(data);
		}
	});
});

router.get('/empleado/:id', async function (req, res, next) {
	let empleado = mongoose.model('empleado');
	let id = req.params.id;
	await empleado.findById(id, function (err, data) {
		if (err) {
			res.send('error');
		} else {
			res.send(data);
		}
	});
});

router.post('/empleado/estatus', async function (req, res, next) {
	let empleado = mongoose.model('empleado');
	let id = req.body.id;
	let newStatus = req.body.cambio;
	await empleado.findByIdAndUpdate(id, { activo: newStatus }, function (err, data) {
		if (err) {
			res.send('error');
		} else {
			res.send(data);
		}
	});
});

router.delete('/empleado/:id', async function (req, res, next) {
	let empleado = mongoose.model('empleado');
	let id = req.params.id;
	await empleado.findByIdAndDelete(id, function (err, data) {
		if (err) {
			res.send('error');
		} else {
			res.send(data);
		}
	});
});

module.exports = router;
