// Carregar variables d'entorn
require('dotenv').config({ quiet: true });

// Importar llibreries necessàries
const mongoose = require('mongoose'); 
const app = require('./app'); 

const PORT = process.env.PORT || 3000;

// Connectar amb MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connexió a MongoDB establerta');
        // Iniciar el servidor
        app.listen(PORT, () => {
            console.log(`Servidor en funcionament a http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Error connectant a MongoDB:', err.message));
