const express = require('express');
const sequelize = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', itemRoutes);

// Conexión a la base de datos y sincronización
sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}).catch(error => {
    console.log('Error connecting to the database', error);
});
