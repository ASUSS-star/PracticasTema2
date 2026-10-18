const express = require('express');
const router = express.Router();

const {
    getClients,    

} = require('../controllers/clientController');

router.get('/', getClients);

//pollito con papas


module.exports = router;