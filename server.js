const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const cors = require("cors");
const Orders = require("./models/orderModel");
app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const port =5000;
connectDb();

// app.use("/api/getConfession", require("./routes/ordersRoutes"));
// app.use("/api/postConfessino", require("./routes/userRoutes")) /
  app.get("/api/getConfession", async (req, res) => {
    const orders = await Orders.find({ order: req.body.rollno });
    res.status(200).json(orders);
  })

  app.post("/api/postConfession", async (req, res) => {
    if (!req.body) {
      res.status(400);
      throw new Error("No data to add!");
    }
  
    const { rollno, confession } = req.body;
  
    const Order = await Orders.create({
      rollno,
      confession,
    });
    res.json(Order).status(200);
  })
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
