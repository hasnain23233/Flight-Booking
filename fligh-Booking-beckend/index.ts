import express , {Request , Response} from "express";
import mongoos from 'mongoose'
import BookingRouter from './routers/bookingRouters'

const app = express()
const mongo_link = 'mongodb://localhost:27017/'
const PORT = 500


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