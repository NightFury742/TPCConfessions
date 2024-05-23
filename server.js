const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const cors = require("cors");
const Orders = require("./models/orderModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;
connectDb();

// Define the getConfession route
app.get("/api/getConfession", async (req, res) => {
  try {
    let rollno= req.body.rollno;
    rollno=rollno.toLowerCase();
    const orders = await Orders.find({ rollno: rollno });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Define the postConfession route
app.post("/api/postConfession", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "No data to add!" });
      return;
    }

    let { rollno, confession } = req.body;
    rollno = rollno.toLowerCase();
    res.json({ message: "Welcome to Confession API" });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
