const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderId: String,
    placedOn: String,
    products: [
        {
            name: String,
            basePrice: Number,
            quantity: Number,
            image: String
        }
    ],
    totalItems: Number,
    subTotal: Number,
    deliveryFee: Number,
    totalAmount: Number,
    customerEmail: String
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
