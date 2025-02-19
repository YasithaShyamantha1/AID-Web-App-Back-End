import express from "express";
import { getHotelById,gettAllHotels,createHotel,deleteHotel,updateHotel } from "../application/hotelContoller";

const hotelRouter = express.Router();

hotelRouter.get("/:id", getHotelById);
hotelRouter.get("/",gettAllHotels);
hotelRouter.post("/",createHotel);
hotelRouter.delete("/:id",deleteHotel);
hotelRouter.put("/:id",updateHotel);

export default hotelRouter;
