import express from 'express';
import {CreateBooking} from './../controllers/newbooking'

const router = express.Router()

router.post('/newbooking' , CreateBooking)

export default router