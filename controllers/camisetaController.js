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
module.exports = {
    getAll
}