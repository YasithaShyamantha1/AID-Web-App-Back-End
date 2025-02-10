import express from "express";
import { getHotelById,gettAllHotels,createHotel,delteHotel,updateHotel } from "../application/hotelContoller.js";

const hotelRouter = express.Router();

hotelRouter.get("/:id", getHotelById);
hotelRouter.get("/",gettAllHotels);
hotelRouter.post("/",createHotel);
hotelRouter.delete("/:id",delteHotel);
hotelRouter.put("/:id",updateHotel);

export default hotelRouter;
