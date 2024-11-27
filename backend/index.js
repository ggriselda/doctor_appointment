import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';
import bookingRoute from './Routes/booking.js';
dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corseOptions = {
    origin: ['http://192.168.34.123:5173'], // Địa chỉ IP frontend http://172.21.1.124
    credentials: true, // Cho phép gửi cookie
};

app.get('/', (req,res)=>{
    res.send('Api is working')
})

mongoose.set('strictQuery', false)
const connectDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
        console.log('MD Database connected');
    } catch (err) {
        console.log('MD Database dun');
    }
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corseOptions))
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/bookings', bookingRoute)

app.listen(port,'0.0.0.0', ()=>{
    connectDB()
    console.log('Server is running on port ' + port);
})