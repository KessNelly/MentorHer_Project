const express = require ("express");
const dbConnect = require ("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const ejs = require('ejs');
const PORT = process.env.PORT || 4011
const authRouter = require ('./route/authRoute');
const workoutRoute = require("./route/workoutRoutes")
const categoryRouter = require("./route/categoryRoute");




const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
dbConnect();


app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/api/user', authRouter);
app.use('/api/workouts', workoutRoute);
app.use('/api/category', categoryRouter);



app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})