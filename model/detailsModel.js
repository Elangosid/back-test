const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  bikenum: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("ProductData", productSchema);
