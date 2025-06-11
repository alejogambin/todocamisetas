const db = require('../basedatos/db');

const Camisetas = {
    getAll: async () => {
        try {
            const [rows] = await db.query('select * from camiseta');
            console.log('camisetas obtenidas: ', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron camisetas' };
            }
            return rows;
        } catch (err) {
            console.error('error al obtenr las camisetas:', err);
            throw err;
        }
    },
    create: async (camiseta) => {
        try {
            const [rows] = await db.query
            ('insert into camiseta(titulobigint,club,pais,tipo,color,precio,tallasdisponibles,detalles,codigodeproducto) VALUES(?,?,?,?,?,?,?,?,?)',
            [camiseta.titulobigint, camiseta.club, camiseta.pais, camiseta.tipo, camiseta.color, camiseta.precio, camiseta.tallasdisponibles, camiseta.detalles, camiseta.codigodeproducto]
            );
            console.log('Camiseta creada:');
            if(rows.affectedRows > 0){
                return{
                    message: 'camiseta creada exitosamente'
                };
            }
            return rows;
        }catch(err){
            console.error('error al crear la camistea:',err);
            throw err;
        }
    },
    update: async(camiseta)=>{
        try{
            const[rows] = await db.query(
                ' update camistea set titulobigint =?,club=?,pais=?,tipo=?,color=?,precio=?,tallasdisponibles=?,detalles=?,codigodeproducto=? where id=?',
                [camiseta.titulobigint, camiseta.club, camiseta.pais, camiseta.tipo, camiseta.color, camiseta.precio, camiseta.tallasdisponibles, camiseta.detalles, camiseta.codigodeproducto, camiseta.id]
            );
            console.log('camiseta actualizada:');
            if(rows.affectedRows >0){
                return {message : 'camiseta actualizada exitosamente'};
            }
            return rows;
        }catch(err){
            console.error('error al actualizar el usuario:',err);
            throw err;
        }

    },
    remove : async(camiseta)=>{
         try { 
            // Elimina el registro según el email recibido 
            const [rows] = await db.query( 
                'DELETE FROM camiseta WHERE codigodeproducto = ?',  
                [camiseta.codigodeproducto] 
            ); 
            console.log('camiseta eliminada:'); 
            // Si la eliminación fue exitosa, retorna un mensaje de éxito 
            if (rows.affectedRows > 0) { 
                return { message: 'camiseta eliminado exitosamente' }; 
            } 
            // Retorna el resultado de la consulta 
            return rows;   
        } catch (err) { 
            // Manejo de errores en la eliminación 
            console.error('Error al eliminar la camiseta:', err); 
            throw err; 
        } 
    }
};
module.exports = Camisetas;