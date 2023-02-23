const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    active:{type:Boolean},
    order_status:{type:String},
    id: { type: Number },
    image: { type: String },
    brand: { type: String },
    price: { type: String },
    price2: { type: String },
    details: { type: String },
    category: { type: String },
    size: { type: Number },
    sub_category: { type: String },
    userID: { type: mongoose.Schema.ObjectId, ref: "user" }
  },
  { versionKey: false }
);

const cartModel = mongoose.model("cart", cartSchema);

module.exports = { cartModel };
