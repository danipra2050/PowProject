import express from "express";
import dbConfig from "./Config/dbConfig.js";
import userRoutes from "./Routes/index.js";
import cors from "cors";

const app = express();

try{
    await dbConfig.authenticate();
    console.log("Database commected....");
}catch(error){
    console.error("Connection error: ", error);
}

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

app.listen(5000, () => console.log("API running at port 5000"));