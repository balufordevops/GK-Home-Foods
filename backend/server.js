require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Order = require("./models/Order");
const Razorpay = require("razorpay");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Failed", err));

// Razorpay Instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Route to Create Razorpay Order
app.post("/create-order", async (req, res) => {
    try {
        const { totalAmount } = req.body;
        const options = {
            amount: totalAmount * 100,
            currency: "INR",
            receipt: `order_rcptid_${Date.now()}`
        };
        const response = await razorpay.orders.create(options);
        res.json(response);
    } catch (error) {
        console.error("❌ Razorpay Order Creation Failed", error);
        res.status(500).json({ error: "Order creation failed" });
    }
});

// Webhook for Payment Success
app.post("/razorpay-webhook", async (req, res) => {
    try {
        const { orderId, placedOn, products, totalItems, subTotal, deliveryFee, totalAmount, customerEmail } = req.body;

        // Save Order in Database
        const newOrder = new Order({
            orderId,
            placedOn,
            products,
            totalItems,
            subTotal,
            deliveryFee,
            totalAmount,
            customerEmail
        });

        await newOrder.save();
        console.log(`✅ Order Stored: ${orderId}`);

        res.status(200).json({ message: "Order stored successfully!" });
    } catch (error) {
        console.error("❌ Error storing order", error);
        res.status(500).json({ error: "Failed to store order" });
    }
});

// Get All Orders (For Admin)
app.get("/orders", async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        console.error("❌ Error fetching orders", error);
        res.status(500).json({ error: "Failed to fetch orders" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
