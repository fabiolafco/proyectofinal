var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Agregando nueva ruta
router.get('/greeting', function(req, res, next){
  res.status(200).json({message:'Hola estas en proyecto final'})
})

module.exports = router;
