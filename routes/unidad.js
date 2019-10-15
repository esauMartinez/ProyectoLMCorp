var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads')
	},
	filename: function (req, file, cb) {
		var datetimestamp = Date.now();
		cb(null, file.originalname.split('.')[0] + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
	}
});

var upload = multer({
	storage: storage
}).fields([
	{ 
		name: 'poliza', 
		maxCount: 1 
	},
	{
		name: 'foto',
		maxCount: 1
	}
]);

router.post('/unidad', async (req, res) => {
	await upload(req, res, (err) => {
		if (err) {
			res.send(err)
		} else {
			let unidad = mongoose.model('unidad');
			let obj = {
				economico: req.body.num_economico,
				tipo: req.body.tipo,
				condicion: req.body.condicion,
				placas: req.body.placas,
				marca: req.body.marca,
				modelo: req.body.modelo,
				color: req.body.color,
				combustible: req.body.combustible,
				adquisicion: req.body.adquisicion,
				km_inicial: req.body.km_inicial,
				poliza_seguro: req.files.poliza[0].filename,
				vencimiento: req.body.ven_poliza,
				fecha_adquisicion: req.body.fecha_adquisicion,
				foto: req.files.foto[0].filename
			}

			unidad.create(obj, function (err, data) {
				if (err) {
					res.send('error');
				} else {
					res.send({msj:'ok'});
				}
			});
		}
	});
});

router.get('/unidad', async function (req, res, next) {
	let unidad = mongoose.model('unidad');
	await unidad.find({}, function (err, data) {
		if (err) {
			res.send('error');
		} else {
			res.send(data);
		}
	});
});

router.get('/unidad/:id', async function (req, res, next) {
	let unidad = mongoose.model('unidad');
	let id = req.params.id;
	await unidad.findById(id, function (err, data) {
		if (err) {
			res.send('error');
		} else {
			res.send(data);
		}
	});
});

module.exports = router;
