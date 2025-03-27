import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'


dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URL;

if(!MONGO_URL){
    console.error("Mongodb url is not defined in .env file");
    process.exit(1);
}

app.use(express.json());
app.use(cors());
// app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGODB_URL, {

})
.then(()=>{
    console.log("Database Connection Successfull")
    app.listen(PORT, ()=> console.log(`Server is running on : ${PORT}`));
})
.catch((error) => {
    console.log("Database connection failed : ", error);
    process.exit(1);
})