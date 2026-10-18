const express = require('express');
const Pool = require('./database');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

// Define your routes here
app.get('/test', async (req, res) =>{
    try {
        const result = await Pool.query('SELECT * FROM client_records');
        res.json(result.rows);
    } catch (error) {   
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/test', async (req, res) => {
    try {
        const { username, payment_status, comission_status, deadline} = req.body;    
        const result = await Pool.query(
            'insert into client_records (username, payment_status, comission_status, deadline) values ($1, $2, $3, $4) RETURNING *',[username, payment_status, comission_status, deadline]
        );
        res.status(201).json(result.rows[0]);
        console.log('Registro Exitoso');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del Servidor' });
    }
});


app.put('/test/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const { username, payment_status, comission_status, deadline} = req.body;    
        const result = await Pool.query(
            'update client_records set username=$1, payment_status=$2, comission_status=$3, deadline=$4 where id=$5 RETURNING *',
            [username, payment_status, comission_status, deadline, id]
        ); 


        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }


        res.status(200).json(result.rows[0]);
        console.log('Registro Actualizado');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del Servidor' });
    }
});

app.delete('/test/:id', async (req, res) => {
try{
 const { id } = req.params;
 const result = await Pool.query('delete from client_records where id = $1', [id]);
 console.log('Registro Eliminado');


 if (result.rows.count === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

 res.status(204).send();
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error del Servidor' });
}
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});