const express = require('express'); 
const router = express.Router(); 
const camisetaController = require('../controllers/camisetaController');

router.get('/', (req, res, next) => { 
   camisetaController.getAll(req, res); 
});

router.post('/create',(req,res,next)=>{
   camisetaController.create(req,res);
})

router.put('/update',(req,res,next)=>{
   camisetaController.update(req,res);
})

router.delete('/remove',(req,res,next)=>{
   camisetaController.remove(req,res);
})

module.exports = router;