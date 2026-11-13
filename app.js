const express = require('express');
const cors = require('cors');
const app = express(); // Inicialitzar Express

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta inicial de prova
app.get('/', (req, res) => {
    res.json({ message: 'Gestor de tasques en funcionament!' });
});

// Importar rutes (les descomentarem quan creem el fitxer)
// const taskRoutes = require('./routes/taskRoutes');
// app.use('/api/tasks', taskRoutes);

module.exports = app; // Exportar l'aplicació
