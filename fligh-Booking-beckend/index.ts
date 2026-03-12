import express , {Request , Response} from "express";
import mongoos from 'mongoose'
import BookingRouter from './routers/bookingRouters'

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express()

const PORT = process.env.PORT || 5000;
const mongo_link = process.env.MONGO_URI as string;


app.use('/' , (req : Request , res: Response )=>{
    res.send("This is beckend project")
})
app.use('/booking/' , BookingRouter)


mongoos.connect(mongo_link)
    .then(()=>{
        app.listen(PORT , ()=>{
            console.log(`Connected to MongoDB. Server running at http://localhost:${PORT}`);
        })
    })
    .catch((error)=>{
        console.error('Cannot connect to the database:', error);
    })