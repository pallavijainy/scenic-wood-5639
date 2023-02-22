const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, process.env.secret_key, (err, decoded) => {
    if (decoded) {
      req.body.userID = decoded.userID;
      next();
    } else {
      res.send(err);
    }
  });
};

module.exports = { Authenticate };
