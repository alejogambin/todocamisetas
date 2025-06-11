require ('dotenv').config();
const mysql = require('mysql2/promise');

const requiredEnvVars =[
    'DB_HOST',
    'DB_USER',
    'DB_NAME',
    'DB_PORT',]

    requiredEnvVars.forEach((envVar)=> {
        if(!process.env[envVar]){
            throw new Error(`falta variable de entorno: ${envVar}`);
        }
    });

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
});

module.exports = pool;