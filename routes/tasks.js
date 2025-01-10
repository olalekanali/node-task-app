const express = require('express');
const router = express.Router()

let tasks = []; // In-memory storage for tasks


//GET ALL TASKS
router.get('/', (req, res) => {
    res.render('tasks', { tasks });
  });

  router.get('/new', (req, res) => {
    res.render('taskForm', { task: null });
  });

  router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
  
    if (!task) {
      return res.status(404).send('Task not found');
    }
  
    res.render('taskForm', { task });
  });
  

// CREATE A NEW TASK
router.post('/', (req, res) => {
    const { title } = req.body;
  
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
  
    const newTask = { id: tasks.length + 1, title, completed: false };
    tasks.push(newTask);
  
    res.status(201).json(newTask);
  });

  //GET A SINGLE TASK
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
  
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    res.json(task);
  });

  //UPDATE A TASK
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
  
    const task = tasks.find(t => t.id === parseInt(id));
  
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;
  
    res.json(task);
  });
  
  //DELETE A TASK
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
  
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    tasks.splice(taskIndex, 1);
  
    res.status(204).send();
  });
  
  
  module.exports = router;