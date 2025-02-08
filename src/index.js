import "dotenv/config";
import express from "express";
import hotelRouter from "./api/hotelRoutes.js";
import connectDB from "./infrastucture/db.js";



const app = express();


app.use(express.json());

connectDB();

app.use("/api/hotels",hotelRouter);

const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));




// password="0yusFavVxfXPf23e"
// .env ="mongodb+srv://yasithagodaarawa:0yusFavVxfXPf23e@aid-webapp.xvrwg.mongodb.net/?retryWrites=true&w=majority&appName=AID-WebApp"