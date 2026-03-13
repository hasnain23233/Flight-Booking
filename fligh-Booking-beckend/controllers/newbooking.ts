 
import { Request, Response } from "express";
import { bookingModel } from "../models/newBooking";
 
const requiredFields = [
  "fullName",
  "customerEmail",
  "departureAirport",
  "destinationAirport",
  "bookingDate",
  "flightType",
  "departureDateTime",
  "pnr",
];

export const CreateBooking = async (req: Request, res: Response) => {
  try {
    const data = req.body; 
    const missingFields = requiredFields.filter(
      (field) => !data[field] || data[field].toString().trim() === ""
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: " + missingFields.join(", "),
      });
    }
 
    const numberFields = [
      "economy",
      "basicFare",
      "tax",
      "apc",
      "safi",
      "misc",
      "adminChargesExtra",
      "salesPrice",
      "adminCharges",
    ];

    for (const field of numberFields) {
      if (data[field] !== undefined && typeof data[field] !== "number") {
        return res.status(400).json({
          success: false,
          message: `${field} must be a number`,
        });
      }
    }
 
    const booking = new bookingModel(data);
    const saveBooking = await booking.save();

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: saveBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
    });
  }
};