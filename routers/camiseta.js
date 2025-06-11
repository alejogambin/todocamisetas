const express = require('express'); 
const router = express.Router(); 
const camisetaController = require('../controllers/camisetaController');

router.get('/', (req, res, next) => { 
   camisetaController.getAll(req, res); 
}); 

module.exports = router;