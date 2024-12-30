import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getDoctorAppointments = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const appointments = await Booking.find({ doctor: doctorId });
    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: appointments,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, cannot get appointments",
    });
  }
};

export const getCheckoutSession = async (req, res) => {
  try {
    // get currently booked doctor    
    const doctor = await Doctor.findById(req.params.doctorId)
    const user = await User.findById(req.userId)

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    // create stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get("host")}/doctors/${doctor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.doctorId,
      line_items: [
        {
          price_data: {
            currency: "VND",
            unit_amount: doctor.ticketPrice,
            product_data: {
              name: doctor.name,
              description: doctor.bio,
              images: [doctor.photo],
            },
          },
          quantity: 1,
        },
      ],
    });

    const { bookingStartTime, bookingEndTime } = req.body;

    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: session.id,
      bookingStartTime: new Date(bookingStartTime), // Thời gian bắt đầu, chuyển đổi thành đối tượng Date
      bookingEndTime: new Date(bookingEndTime),
    });
    await booking.save();

    // send the created session as a response
    res.status(200).json({ success: true, message: "Successfully paid", session });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Error creating checkout session" });
  }
}