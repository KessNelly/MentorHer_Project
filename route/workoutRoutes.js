const express = require('express')
//Instead of using app
//Handles all the routes in the file
const router = express.Router()
const workoutsCtrl = require('../controller/workoutsController')

//Import the ... module
router.get('/api/workouts', workoutsCtrl.indexWorkouts )

router.post('/api/workouts', workoutsCtrl.postWorkouts ) //not working


router.get('/api/workouts/:id', workoutsCtrl.get1workout)
//router.get('/api/workouts/:level', workoutsCtrl. getBeginaAndFml)// not working


router.put('/api/workouts/:id', workoutsCtrl.updateWorkout)
router.delete('/api/workouts/:id', workoutsCtrl.deleteWorkout)


//Export all files that are not your entry point
module.exports = router

