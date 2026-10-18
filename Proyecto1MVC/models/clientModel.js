const pool = require('../config/database');

const ClientModel = {
//obtener todos los clientes

FindAllClients: async () => {
const result = await pool.query('SELECT * from client_records');
return result.rows;
},
};

module.exports = ClientModel;