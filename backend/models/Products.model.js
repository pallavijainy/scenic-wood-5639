const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    id: { type: Number },
    image: { type: String },
    brand: { type: String },
    price: { type: Number },
    price2: { type: Number },
    details: { type: String },
    category: { type: String },
    size: { type: Number },
    sub_category: { type: String },
    userID: { type: mongoose.Schema.ObjectId, ref: "user" },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = { ProductModel };
