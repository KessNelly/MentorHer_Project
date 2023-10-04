const express = require ("express");
const dbConnect = require ("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4011
const authRouter = require ('./route/authRoute');


const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/user', authRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
})