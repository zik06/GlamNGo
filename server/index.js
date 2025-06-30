const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const employeeModel = require('./models/Employee')
const Order = require('./models/Order')

const app = express()
app.use(express.json()) //Middleware to parse incoming JSON requests.
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/Login", (req,res) => {
    const {email,password} = req.body;
    employeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            } else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})
app.post('/signup', async (req, res) => {
  try {
    const user = await employeeModel.create(req.body);
    res.json({ message: "User created", userId: user._id }); 
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post('/buy', async (req, res) => {
  try {
    const { userId, shippingDetails, items } = req.body;

    const newOrder = new Order({
      userId: userId || null,
      shippingDetails,
      items,
      placedAt: new Date()
    });

    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    console.warn("Order creation error:", err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

app.listen(3001,() => {
    console.log("server is running")
})