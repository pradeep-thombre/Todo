// import instance of express 
const express = require("express");
const router = express.Router();

// importing taskController
const taskController = require("../controllers/taskController");

// call function of task controller depending on requested url
router.post("/addTask", taskController.addTask);
router.post("/deleteTask", taskController.deleteTask);

// export router module
module.exports = router;
