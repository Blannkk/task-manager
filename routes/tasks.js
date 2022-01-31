const express = require('express');
const router = express.Router();

 const { 
    getAllTasks, 
    creatTask,
    getTask,
    updateTask,
    deleteTasks 
    } = require('../controllers/tasks');


 router.route('/')
 //handel get all requests
    .get(getAllTasks)
 //handle post request
    .post(creatTask);

 router.route('/:id')
 //handle get requestPOST
 .get(getTask)
 //handle patch request
 .patch(updateTask)
 //handle delete request
 .delete(deleteTasks)



module.exports = router;