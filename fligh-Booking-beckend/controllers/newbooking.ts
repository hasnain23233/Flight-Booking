import { Request , Response , NextFunction } from "express";

export const CreateBooking = (req: Request , res:Response , next: NextFunction)=>{
    res.send("creating new booking")
}