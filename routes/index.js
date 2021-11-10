const express = require('express');
const router = express.Router();

const todoController= require('../controllers/taskController');

//for displaying home page
router.get('/',todoController.home);

//for tasks related functionality-add,delete
router.use('/tasks',require('./task'));

module.exports= router;