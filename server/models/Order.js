const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee', // Refers to your employee model
    required: false
  },
  shippingDetails: {
    fullName: String,
    phone: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  items: [
    {
      title: String,
      price: String,
      quantity: Number
    }
  ],
  placedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('order', OrderSchema);
