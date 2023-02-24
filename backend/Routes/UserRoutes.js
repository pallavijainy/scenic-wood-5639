const { Router } = require("express");
require("dotenv").config();

const userRouter = Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.models");
const { Validator } = require("../middleware/Validator.middleware");

//register
userRouter.post("/register", Validator,async (req, res) => {
  const { name, email, password, confirmPass, number } = req.body;
  const data = await userModel.find({
    $or: [{ email: email }, { number: number }],
  });

  if (password !== confirmPass) {
    res.send({ msg: "password must be same" });
  } else {
    if (data.length > 0) {
      res.send({ msg: "user already exist" });
    } else {
      bcrypt.hash(password, 3, async (err, hash) => {
        try {
          if (err) {
            res.send({ msg: "something went wrong" });
          } else {
            const userDetail = new userModel({
              name,
              email,
              password: hash,
              confirmPass,
              number,
            });
            await userDetail.save();
            res.send({ msg: "user Registered successfully" });
          }
        } catch (error) {
          res.send({ msg: "something went wrong", error: error.message });
        }
      });
    }
  }
});

//login

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const data = await userModel.find({ email: email });
  if (data.length > 0) {
    bcrypt.compare(password, data[0].password, (err, result) => {
      if (result) {
        const token = jwt.sign({ userID: data[0]._id }, process.env.secret_key);
        res.send({ msg: "user logged in", token: token });
      } else {
        res.status(404).send({ msg: "invalid credentials" });
      }
    });
  } else {
    res.send({ msg: "user not found" });
  }
});

//update
userRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("user data updated");
  } catch (error) {
    res.send({ msg: "something went wrong", error: error.message });
  }
});

//delete

userRouter.delete("/delete/:id",async (req, res) => {
  const id = req.params.id;

  try {
    await userModel.findByIdAndDelete({ _id: id });
    res.send("user deleted successfully");
  } catch (error) {
    res.send({ msg: "something went wrong", error: error.message });
  }
});

//get
userRouter.get("/", async(req,res)=>{
try {
  const data =await userModel.find()
res.send(data)
} catch (error) {
  res.send(error)
}
});




module.exports = { userRouter };
