import { Request,Response } from "express";
import Booking from "../infrastucture/schemas/BookingModel";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { hotelId, userId, checkIn, checkOut, roomNumber } = req.body;

    // Validate request data
    if (!hotelId || !userId || !checkIn || !checkOut || !roomNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create the booking
    const newBooking = await Booking.create({
      hotelId,
      userId,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      roomNumber,
    });

    res.status(201).json(newBooking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBookingsForHotel = async (req: Request, res: Response) => {
  try {
    const { hotelId } = req.params;
    const bookings = await Booking.find({ hotelId }).populate("userId");

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
