const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
require("dotenv").config();




app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB Connected")
})

app.use("/api/auth",require("./Routes/route"));
app.listen(process.env.PORT,()=>{
    console.log("Server Connected")
})