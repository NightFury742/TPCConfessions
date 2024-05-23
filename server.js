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

app.get("/api/getConfession", async (req, res) => {
  try {
    let roll_no = req.body.roll_no;
    roll_no = roll_no.toLowerCase();
    const orders = await Orders.find({ roll_no: roll_no });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.post("/api/postConfession", async (req, res) => {
    if (!req.body) {
      res.status(400);
      throw new Error("No data to add!");
    }
  
    let { roll_no, confession } = req.body;
    roll_no = roll_no.toLowerCase();
    const Order = await Orders.create({
      roll_no,
      confession,
    });
    res.json(Order).status(200);
  })

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
