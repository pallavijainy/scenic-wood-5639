const { Router } = require("express");
const { Authenticate } = require("../middleware/Auth.middleware");
const { ProductModel } = require("../models/Products.model");
// const allProduct = require("../Product.json");

const ProductRouter = Router();

ProductRouter.get("/", async (req, res) => {
  const category = req.query;
  const sub_category = req.query;
  const size = req.query;
  const brand = req.query;

  const { price, sort ,limit,page} = req.query;

  try {
    if (price > 0) {
      const data = await ProductModel.find({ price: { $lte: price } }).sort({
        price: sort == "asc" ? 1 : -1,
      });
      res.send(data);
    } else {
      const data = await ProductModel.find({
        $or: [
          category,
          sub_category,
          brand,
          { $and: [category, sub_category] },
          { $and: [category, sub_category, size] },
          { $and: [category, size] },
          { $and: [category, brand] },
          { $and: [category, sub_category, brand] },
          { $and: [category, sub_category, brand, size] },
        ],
      }).sort({
        price: sort == "desc" ? -1 : 1,
      }).limit(limit).skip((page-1)*limit)
      res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
});

ProductRouter.post("/add",Authenticate, async (req, res) => {
  try {
    const data = new ProductModel(req.body);
    await data.save();
    res.send("data is added");
  } catch (error) {
    res.send(error);
  }
});
//update
ProductRouter.patch("/update/:id",Authenticate, async (req, res) => {
  const id = req.params.id;

  try {
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("product updated");
  } catch (error) {
    res.send({ msg: "something went wrong", error: error.message });
  }
});

//delete

ProductRouter.delete("/delete/:id",Authenticate, async (req, res) => {
  const id = req.params.id;

  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    res.send("product deleted successfully");
  } catch (error) {
    res.send({ msg: "something went wrong", error: error.message });
  }
});

// ProductRouter.get("/all", async (req, res) => {
//   await ProductModel.insertMany(allProduct, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("data");
//     }
//   });
// });

module.exports = { ProductRouter };
