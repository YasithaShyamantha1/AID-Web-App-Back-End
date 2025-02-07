import express from "express";
import hotelRouter from "./api/hotelRoutes.js";

// Create an Express instance
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

app.use("/api/hotels",hotelRouter);





// Define the port to run the server
const PORT = 8000;
app.listen(PORT, console.log(`Server is running on port ${PORT}...`));




// password="0yusFavVxfXPf23e"
// .env ="mongodb+srv://yasithagodaarawa:0yusFavVxfXPf23e@aid-webapp.xvrwg.mongodb.net/?retryWrites=true&w=majority&appName=AID-WebApp"