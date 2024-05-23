const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    conn = await mongoose.connect("mongodb+srv://eshaan122:eshaan@cluster0.gpsm6w0.mongodb.net/");
    console.log(` connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
