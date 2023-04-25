const express = require ('express');
const router = express.Router();
const task = require ( '../models/task');
const crudFunctions = require('../controllers/crudfunctions')

router.get('/',crudFunctions.home);
router.post('/add-task',crudFunctions.addTask);
router.get('/delete-task',crudFunctions.deleteTask);

router.post('/add-checkbox',crudFunctions.addCheckbox );
router.post('/remove-checkbox',crudFunctions.removeCheckbox );
router.get('/completed-task',crudFunctions.completedTask);
router.get('/uncompleted-task',crudFunctions.unCompletedTask);
router.get('/clear-completed',crudFunctions.clearCompletedTask);
module.exports = router;