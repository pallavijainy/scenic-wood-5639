const { Router } = require("express");
const { Authenticate } = require("../middleware/Auth.middleware");
const { OrderModel } = require("../models/Order.model");

const OrderRouter = Router();

OrderRouter.get("/", Authenticate, async (req, res) => {
  const userID = req.body.userID;
  try {
    const data = await OrderModel.find({ userID: userID }).populate("userID", [
      "name",
      "email",
      "number",
    ]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

OrderRouter.post("/add", Authenticate, async (req, res) => {
  try {
    const data = new OrderModel(req.body);
    await data.save();
    res.send("data is added");
  } catch (error) {
    res.send(error);
  }
});

//patch

OrderRouter.patch("/active/:id/prod/:pid", async (req, res) => {
  const { id, pid } = req.params;
  const {active} = req.body;
// res.send(active)
  await OrderModel.updateOne(
    { _id: id, "product._id": pid },
    { $set: { "product.$.active": active } }
  )
    .then((result) => res.send("data updated"))
    .catch((err) => res.send(err));
});

//order status

OrderRouter.patch("/orderStatus/:id/prod/:pid", async (req, res) => {
    const { id, pid } = req.params;
    const {order_status} = req.body;
  
    await OrderModel.updateOne(
      { _id: id, "product._id": pid },
      { $set: { "product.$.order_status": order_status } }
    )
      .then((result) => res.send("data updated"))
      .catch((err) => res.send(err));
  });

OrderRouter.get("/admin", async (req, res) => {
  try {
    const data = await OrderModel.find().populate("userID", [
      "name",
      "email",
      "number",
    ]);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = { OrderRouter };
