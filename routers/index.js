const express = require('express');
const router = express.Router();

const camisetasRoutes = require('./camiseta');
const clientesRoutes = require('./cliente');
const preciodeofertaRoutes = require('./preciodeoferta');

router.use('/camisetas',camisetasRoutes);
router.use('/clientes',clientesRoutes);
router.use('/preciodeoferta',preciodeofertaRoutes);

router.use((req,res)=>{
    console.error('ruta no orquestada en index.js '+ req.method+ ' '+ req.url);
    res.status(404).json({
        error:'ruta no encontrada'
    });
});

module.exports= router;