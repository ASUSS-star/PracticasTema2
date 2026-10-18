const ClientModel = require('../models/clientModel');

const logAction = (type, message) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
};

const getClients = async (req, res) => { 
    try {
        const clients = await ClientModel.FindAllClients();
        logAction('INFO', `Consulta realizada: ${clients.length} clientes obtenidos`);
        res.json(clients);
    } catch (error) {
        logAction('ERROR', `Error al obtener clientes: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getClients,
};
