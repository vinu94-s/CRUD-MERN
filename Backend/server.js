const express = require("express");
const notes =require("./data/notes");
const dotenv =require ("dotenv");
const connectDB =require("./config/db");
const userRoutes=require('./routes/userRoutes');
const noteRoutes=require('./routes/noteRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();

connectDB();

const app = express();

app.use(express.json()); 


app.get("/",(req,res) => {
   res.send("API is running")
});

//app.get("/api/notes",(req,res)=>{
    //res.json(notes);
//})

app.use('/api/users',userRoutes);
app.use('/api/notes', noteRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT; 

app.listen(PORT, console.log(`server started on PORT ${PORT}`));
