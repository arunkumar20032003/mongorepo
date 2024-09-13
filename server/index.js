const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const Studentmodel = require('./model/Student');

// Middleware
app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://arunkumarboopesh:arun123@cluster0.gfll2.mongodb.net/placement")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// POST route for registratio
app.post('/register', async (req, res) => {
  
    const student = await Studentmodel.create(req.body);
    // res.status(201).json(student);
 
});

// Start the server


