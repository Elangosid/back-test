const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/config");
const productRoute = require("./Routes/product");
const authRoutes = require("./Routes/authRoutes");
const cors = require('cors');
app.use(cors());

connectDB();

app.use(express.json());

app.use("/api/product", productRoute);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("server is running 5000");
});
