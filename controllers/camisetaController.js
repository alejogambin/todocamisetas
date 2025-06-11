const Camisetas = require('../models/camiseta'); 
 
const getAll = async (req, res) => { 
    try { 
       // Llama al método del modelo para obtener todos los registros de usuarios 
       const result = await Camisetas.getAll(); 
       console.log('resultado de la consulta:', result); 
       // Devuelve los resultados en formato JSON con estado 200 (OK) 
       res.status(200).json(result); 
    } catch (err) { 
        // Manejo de errores y respuesta con estado 500 (Error interno) 
        console.error('Error en el controlador de camisetas:', err); 
        return res.status(500).json({ 
            error: 'Error interno del servidor' 
        }); 
    } 
};
const create = async (req,res)=>{
    try{
        const camiseta =req.body;
        const result = await Camisetas.create(camiseta);
        res.status(201).json(result);
    }catch(err){
        console.error('Error e el controlador de camisetas:',err);
        return res.status(500).json({
            error: 'Error interno del servidor'
        });
    }
};
const update = async(req,res)=>{
    try{
        const camiseta = req.body;
        const result= await Camisetas.update(camiseta);
        res.status(200).json(result);
    }catch(err){
        console.error('Error en el controlador de camisetas:',err);
        return res.status(500).json({
            error: 'error interno del servidor'
        });
    }
};
const remove = async (req,res)=>{
    try{
        const camiseta= req.body;
        const result= await Camisetas.remove(camiseta);
        res.status(200).json(result);
    }
    catch(err){
        console.error('Error en el controlador de camiseta:',err);
        return res.status(500).json({
            error:'error interno del servidor'
        })
    }
};
module.exports = {
    getAll , create, update, remove
}