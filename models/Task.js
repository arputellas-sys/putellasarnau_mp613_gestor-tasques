const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El títol és obligatori'],
        trim: true
    },
    description: {
        type: String // Opcional
    },
    cost: {
        type: Number,
        required: [true, 'El cost és obligatori'],
        min: [0, 'El cost no pot ser negatiu']
    },
    hours_estimated: {
        type: Number,
        required: [true, 'La previsió d\'hores és obligatòria'],
        min: [0, 'La previsió d\'hores no pot ser negativa']
    },
    hours_real: {
        type: Number,
        min: [0, 'Les hores reals no poden ser negatives'] // Opcional però no negatiu
    },
    image: {
        type: String // Opcional
    },
    completed: {
        type: Boolean,
        default: false
    },
    finished_at: {
        type: Date,
        default: null // Opcional, s'omplirà automàticament quan es completi
    },
    createdAt: {
        type: Date,
        default: Date.now // Es genera automàticament
    }
});

module.exports = mongoose.model('Task', TaskSchema);
