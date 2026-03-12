import { Request , Response , NextFunction } from "express";
import { bookingModel } from "../models/newBooking";

export const CreateBooking = async (req: Request , res:Response )=>{
    try {
        const booking = new bookingModel(req.body)

        const saveBooking = await booking.save()

        res.status(201).json({success: true ,  message: 'booking create successfully' , data: saveBooking})
    } catch (error) {
        res.status(500).json({success: false , message: "failed to create booking" , error})
    }
}