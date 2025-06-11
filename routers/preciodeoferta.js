const express = require('express'); 
const router = express.Router(); 
const preciodeofertaController = require('../controllers/preciodeofertaController');

router.get('/', (req, res, next) => { 
   preciodeofertaController.getAll(req, res); 
});

router.post('/create',(req,res,next)=>{
   preciodeofertaController.create(req,res);
})

router.put('/update',(req,res,next)=>{
   preciodeofertaController.update(req,res);
})

router.delete('/remove',(req,res,next)=>{
   preciodeofertaController.remove(req,res);
})

module.exports = router;