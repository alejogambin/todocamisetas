const express = require('express');
const router = express.Router();

router.use((req,res)=>{
    console.error('ruta no orquestada en index.js '+ req.method+ ' '+ req.url);
    res.status(404).json({
        error:'ruta no encontrada'
    });
});

module.exports= router;