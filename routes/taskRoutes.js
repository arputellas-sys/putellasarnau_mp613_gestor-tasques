const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rutes de l'API per gestionar les tasques
router.post('/', taskController.createTask);       // Crear una nova tasca
router.get('/', taskController.getTasks);          // Obtenir totes les tasques
router.get('/:id', taskController.getTaskById);    // Obtenir una tasca específica pel seu ID
router.put('/:id', taskController.updateTask);     // Actualitzar una tasca pel seu ID
router.delete('/:id', taskController.deleteTask);  // Eliminar una tasca pel seu ID

module.exports = router;
