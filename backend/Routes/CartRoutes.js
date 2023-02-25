const { Router } = require("express");
const { Authenticate } = require("../middleware/Auth.middleware");
const { cartModel } = require("../models/Cart.model");

// const allcart = require("../cart.json");

const cartRouter = Router();

cartRouter.get("/",Authenticate, async (req, res) => {
  const userID = req.body.userID;
  try {
    const data = await cartModel.find({ userID: userID });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

cartRouter.get("/admin", async (req, res) => {
  const userID = req.body.userID;
  try {
    const data = await cartModel.find().populate("userID");
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

cartRouter.post("/add",Authenticate, async (req, res) => {
  try {
    const data = new cartModel(req.body);
    await data.save();
    res.send("data is added");
  } catch (error) {
    res.send(error);
  }
});

//delete

cartRouter.delete("/delete/:id",Authenticate, async (req, res) => {
    const id = req.params.id;
  
    try {
      await cartModel.findByIdAndDelete({ _id: id });
      res.send("product Removed");
    } catch (error) {
      res.send({ msg: "something went wrong", error: error.message });
    }
  });

// cartRouter.get("/all", async (req, res) => {
//   await cartModel.insertMany(allcart, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("data");
//     }
//   });
// });

module.exports = { cartRouter };
