const express = require('express'); 
const router = express.Router(); 
const clientecontroller = require('../controllers/clienteController');

router.get('/', (req, res, next) => { 
   clientecontroller.getAll(req, res); 
});

router.post('/create',(req,res,next)=>{
   clientecontroller.create(req,res);
})

router.put('/update',(req,res,next)=>{
   clientecontroller.update(req,res);
})

router.delete('/remove',(req,res,next)=>{
   clientecontroller.remove(req,res);
})

module.exports = router;