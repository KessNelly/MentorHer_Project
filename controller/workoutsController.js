//Import the model
const Workouts = require('../model/Workout')
   
//Get all workout objects
const indexWorkouts = async (req, res) => {
    //Go into Book and get the objects
    try {
        //Go into the Workout model and find all
        const workouts = await Workouts.find()
        res.status(200).json(workouts)
    } catch (error) {
        console.log(error)

    }
}
//Post 
const postWorkouts =  async (req, res) => {
    try {
        const postworkout = await Workouts.create(req.body)
        res.status(201).json(postworkout)
    } catch (error) {
        console.log(error)

    }
}
//Get a particular workout object
const get1workout = async (req, res) => {
    const id = req.params.id
        try {
            //display one 'data'
            //Check if the id is the same with the one in the db
            const postbook = await Workouts.findById(id)
            res.status(200).json(postbook)
        } catch (error) {
            console.log(error)
        }
     }
//Update an object
     const updateWorkout = async (req, res) => {
        const postWorkout = req.body
        const id = req.params.id
        try {
            
            //Check if the id is the same with the one in the db
            const postwkout = await Workouts.findByIdAndUpdate
            res.status(200).json(postwkout)
        } catch (error) {
            console.log(error)
        }
     }
     //Delete 
     const deleteWorkout = async (req, res) => {
        const id = req.params.id
        try {
            
            //Check if the id is the same with the one in the db
            const delWorkout = await Workouts.findByIdAndDelete
            res.status(200).json(delWorkout)
        } catch (error) {
            console.log(error)
        }
     }
   //Get workouts for females and beginner level
   //Not working
    const getBeginaAndFml = async (req, res) => {
        try{
            const beginaAndFml = await Workouts.find({
                level: req.query.level,
                gender: res.query.gender
            })
            res.status(200).json(beginaAndFml)
        }catch(error){
          console.log(error)
        }
      }



module.exports = { indexWorkouts, postWorkouts, get1workout, updateWorkout, deleteWorkout, getBeginaAndFml }


