const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var LibrarySchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    content:{
        type:String, //content designed in html
    },
    status:{
        type:Boolean,
    },
    category_id:{
        type:Number,
    },
},
{
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Library', LibrarySchema);