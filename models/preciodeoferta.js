const db = require('../basedatos/db');

const Preciosdeoferta = {
    getAll: async () => {
        try {
            const [rows] = await db.query('select * from preciodeoferta');
            console.log('Precios de oferta obtenidas: ', rows);
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron Precios de oferta' };
            }
            return rows;
        } catch (err) {
            console.error('error al obtenr las Precios de oferta:', err);
            throw err;
        }
    },
    create: async (preciodeoferta) => {
        try {
            const [rows] = await db.query(
                `INSERT INTO preciodeoferta (id_camiseta, id_cliente, precio)
                 SELECT c.id AS id_camiseta,cl.id AS id_cliente, 
                 CASE 
                 WHEN cl.categoria = 'preferencial' AND cl.\`porcentaje de oferta\` IS NOT NULL 
                 THEN c.precio - (c.precio * cl.\`porcentaje de oferta\` / 100) 
                 ELSE c.precio END AS precio 
                 FROM camiseta as c JOIN cliente cl ON cl.id = ? 
                 WHERE c.id = ? 
                `, [preciodeoferta.id_cliente, preciodeoferta.id_camiseta]
            );
            console.log('preciodeoferta creada:');
            if (rows.affectedRows > 0) {
                return {
                    message: 'preciodeoferta creada exitosamente'
                };
            }
            return rows;
        } catch (err) {
            console.error('error al crear la camistea:', err);
            throw err;
        }
    },
    update: async (preciodeoferta) => {
        try {
            const [rows] = await db.query(
                `UPDATE preciodeoferta po
                    JOIN cliente cl ON po.id_cliente = cl.id
                    JOIN camiseta ca ON po.id_camiseta = ca.id
                SET po.precio = 
                    CASE
                    WHEN cl.categoria = 'preferencial' AND cl.\`porcentaje de oferta\` IS NOT NULL
                    THEN ca.precio - (ca.precio * cl.\`porcentaje de oferta\` / 100)
                    ELSE ca.precio
                END
                WHERE po.id_camiseta = ? AND po.id_cliente = ?`,
                [preciodeoferta.id_camiseta, preciodeoferta.id_cliente]
            );
            console.log('camiseta actualizada:');
            if (rows.affectedRows > 0) {
                return { message: 'camiseta actualizada exitosamente' };
            }
            return rows;
        } catch (err) {
            console.error('error al actualizar el usuario:', err);
            throw err;
        }

    },
    remove: async (preciodeoferta) => {
        try {
            // Elimina el registro según el email recibido 
            const [rows] = await db.query(
                'DELETE FROM preciodeoferta WHERE id_camiseta = ? AND id_cliente = ?',
                [preciodeoferta.id_camiseta, preciodeoferta.id_cliente]
            );
            console.log('precio de oferta eliminada:');
            // Si la eliminación fue exitosa, retorna un mensaje de éxito 
            if (rows.affectedRows > 0) {
                return { message: 'precio de oferta eliminado exitosamente' };
            }
            // Retorna el resultado de la consulta 
            return rows;
        } catch (err) {
            // Manejo de errores en la eliminación 
            console.error('Error al eliminar la precio de oferta:', err);
            throw err;
        }
    }
};
module.exports = Preciosdeoferta;