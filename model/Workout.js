 const mongoose = require('mongoose')

//create a schema
const WorkoutSchema = mongoose.Schema({
    exerciseName: String,
    exerciseImg: String,
    equipment: String,
    level: String,
    description: String,
    goal: String,
    duration: String,
    daysperWeek: Number,
    timePerWorkout: String,
    recommendedSuppliments: String,
    workoutVideosUrl: String


})
module.exports = mongoose.model('Workout', WorkoutSchema)// Workout table is created in the database
//Export the model - Book because you need it in the api
//Book collection will automatically be created in your db