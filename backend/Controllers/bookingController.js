import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
    try {
      // get currently booked doctor    
      const doctor = await Doctor.findById(req.params.doctorId)
      const user = await User.findById(req.userId)
  
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    
      // if (!doctor || typeof doctor.ticketPrice !== "number") {
      //   return res.status(400).json({
      //     success: false,
      //     message: "Doctor's ticket price is missing or invalid.",
      //   });
      // }
      // if (!req.userId) {
      //   return res.status(401).json({
      //     success: false,
      //     message: "User not authenticated.",
      //   });
      // }
      
      
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
                unit_amount: doctor.ticketPrice ,
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

      const booking = new Booking({
        doctor: doctor._id,
        user: user._id,
        ticketPrice: doctor.ticketPrice,
        session: session.id
        //bookingTime:req.body
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