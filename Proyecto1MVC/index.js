const express = require('express');
const cors = require('cors');
require('dotenv').config();

const clientRoutes = require('./routes/clientRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/clients', clientRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

