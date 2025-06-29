const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const employeeModel = require('./models/Employee')
const orderModel = require('./models/Order')

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

// app.post('/signup', (req,res) => {
//     employeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err))
// })

app.post('/signup', async (req, res) => {
  try {
    const user = await employeeModel.create(req.body);
    res.json({ message: "User created", userId: user._id }); // ✅ send userId
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/buy", async (req, res) => {
  try {
    const order = await orderModel.create(req.body);
    res.json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("❌ Order creation error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001,() => {
    console.log("server is running")
})