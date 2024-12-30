import express from "express";
import {authenticate} from "./../auth/verifiedToken.js";
import { getCheckoutSession, getDoctorAppointments } from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession);
// Route để lấy dữ liệu lịch đã đặt của bác sĩ
router.get("/appointments/:doctorId", getDoctorAppointments);

export default router;
