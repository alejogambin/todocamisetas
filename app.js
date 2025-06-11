const express = require('express');
const bodyParser= require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use (bodyParser.json());
app.use((req,res,next)=>{
    console.log('solicitud entrante:'+ req.method + ' '+ req.url);
    next();
});

const routes = require('./routers/index');
app.use('/api', routes);

app.use((err,req,res,next)=>{
    console.error('error en la aplicacion: ', err.message);
    res.status(500).json({
        error:'error interno del servidor'
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`);
    console.log(`URL DE LA API: HTTP://localhost:${PORT}/api`);
});