var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { msj: '' });
});

router.get('/inventario', function (req, res, next) {
  res.render('inventario');
});

router.get('/personal', function (req, res, next) {
  res.render('personal');
});

router.get('/proveedores', function (req, res, next) {
  res.render('proveedores');
});

router.get('/unidades', function (req, res, next) {
  res.render('unidades');
});

router.post('/login', function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res.render("index", { msj: -1 });
  } else {
    mongoose.model("usuario").findOne({ "username": 'esau', "password": 'esau' }, function (err, data) {
      if (data === null) {
        res.render('index', { msj: 0 });
      } else {
        res.render('layout');
      };
    });
  };
});

module.exports = router;
