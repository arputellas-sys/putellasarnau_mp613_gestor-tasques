const Task = require('../models/Task'); // Importem el model creat al pas anterior

// 1. Crear una nova tasca (POST)
exports.createTask = (req, res) => {
    const taskData = req.body;

    // Lògica de data de finalització: si ens l'envien ja completada en crear-la
    if (taskData.completed === true) {
        taskData.finished_at = new Date();
    }

    const task = new Task(taskData);

    task.save()
        .then(savedTask => res.status(201).json(savedTask))
        .catch(err => res.status(400).json({ error: "No s'ha pogut crear la tasca", details: err.message }));
};

// 2. Obtenir totes les tasques (GET)
exports.getTasks = (req, res) => {
    Task.find()
        .then(tasks => res.status(200).json(tasks))
        .catch(err => res.status(500).json({ error: "Error obtenint les tasques", details: err.message }));
};

// 3. Obtenir una tasca específica per ID (GET)
exports.getTaskById = (req, res) => {
    Task.findById(req.params.id)
        .then(task => {
            if (!task) return res.status(404).json({ error: 'Tasca no trobada' });
            res.status(200).json(task);
        })
        .catch(err => {
            const status = err.name === 'CastError' ? 400 : 500;
            res.status(status).json({ error: "Error de format d'ID", details: err.message });
        });
};

// 4. Actualitzar una tasca (PUT)
exports.updateTask = (req, res) => {
    const updates = req.body;

    // Lògica de data de finalització automàtica
    if (updates.completed === true) {
        updates.finished_at = new Date(); // Guardem la data actual si es completa
    } else if (updates.completed === false) {
        updates.finished_at = null; // Tornem a null si es desmarca
    }

    Task.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true })
        .then(updatedTask => {
            if (!updatedTask) return res.status(404).json({ error: 'Tasca no trobada' });
            res.status(200).json(updatedTask);
        })
        .catch(err => res.status(400).json({ error: "Error actualitzant la tasca", details: err.message }));
};

// 5. Eliminar una tasca (DELETE)
exports.deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(deletedTask => {
            if (!deletedTask) return res.status(404).json({ error: 'Tasca no trobada' });
            res.status(200).json({ message: 'Tasca eliminada amb èxit', task: deletedTask });
        })
        .catch(err => {
            const status = err.name === 'CastError' ? 400 : 500;
            res.status(status).json({ error: "Error eliminant la tasca", details: err.message });
        });
};
