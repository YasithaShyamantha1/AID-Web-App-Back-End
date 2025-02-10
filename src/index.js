import "dotenv/config";
import express from "express";
import hotelRouter from "./api/hotelRoutes.js";
import connectDB from "./infrastucture/db.js";
import usersRouter from "./api/userRouter.js";
import bookingsRouter from "./api/BookingRoutes.js";



const app = express();


app.use(express.json());

connectDB();

app.use("/api/hotels",hotelRouter);
app.use("/api/user",usersRouter);
app.use("/api/booking",bookingsRouter);


const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));
// console.log("MongoDB URI:", process.env.MONGO_URI);




// password="0yusFavVxfXPf23e"
// .env ="mongodb+srv://yasithagodaarawa:0yusFavVxfXPf23e@aid-webapp.xvrwg.mongodb.net/?retryWrites=true&w=majority&appName=AID-WebApp"