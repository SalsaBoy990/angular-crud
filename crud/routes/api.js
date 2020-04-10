var express = require("express");
var router = express.Router();

/* GET api page. */
router.get("/", function (req, res, next) {
  res.send("Hi, this is the API page.");
});

// Server gives back users/5 from users array
router.get("/:entity/:id", function (req, res, next) {
  res.send("Hi, this is the API page.");
});

// Server gives back all of the users
router.get("/:entity/", function (req, res, next) {
  res.send("Hi, this is the API page.");
});

module.exports = router;
