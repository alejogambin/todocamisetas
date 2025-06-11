const db = require('../basedatos/db');

const Clientes = {
    getAll: async () => {
        try {
            const [rows] = await db.query('select * from cliente');
            console.log('Clientes obtenidos: ', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron Clientes' };
            }
            return rows;
        } catch (err) {
            console.error('error al obtenr las Clientes:', err);
            throw err;
        }
    },
    create: async (cliente) => {
        try {
            const [rows] = await db.query(
            'insert into cliente(nombre,rut,direccion,categoria,contacto, `porcentaje de oferta`) VALUES(?,?,?,?,?,?)',
            [cliente.nombre, cliente.rut, cliente.direccion, cliente.categoria, cliente.contacto, cliente.porcentajedeoferta]
            );
            console.log('cliente creado:');
            if(rows.affectedRows > 0){
                return{
                    message: 'cliente creada exitosamente'
                };
            }
            return rows;
        }catch(err){
            console.error('error al crear el cliente:',err);
            throw err;
        }
    },
    update: async(cliente)=>{
        try{
            const[rows] = await db.query(
                'update cliente set nombre=?,rut=?,direccion=?,categoria=?,contacto=?, `porcentaje de oferta`=? where id=?',
                [cliente.nombre, cliente.rut, cliente.direccion, cliente.categoria, cliente.contacto, cliente.porcentajedeoferta, cliente.id]
            );
            console.log('cliente actualizado:');
            if(rows.affectedRows >0){
                return {message : 'cliente actualizado exitosamente'};
            }
            return rows;
        }catch(err){
            console.error('error al actualizar el cliente:',err);
            throw err;
        }

    },
    remove : async(cliente)=>{
         try { 
            // Elimina el registro según el email recibido 
            const [rows] = await db.query( 
                'DELETE FROM cliente WHERE id= ?',  
                [cliente.id] 
            ); 
            console.log('cliente eliminada:'); 
            // Si la eliminación fue exitosa, retorna un mensaje de éxito 
            if (rows.affectedRows > 0) { 
                return { message: 'cliente eliminado exitosamente' }; 
            } 
            // Retorna el resultado de la consulta 
            return rows;   
        } catch (err) { 
            // Manejo de errores en la eliminación 
            console.error('Error al eliminar el cliente:', err); 
            throw err; 
        } 
    }
};
module.exports = Clientes;