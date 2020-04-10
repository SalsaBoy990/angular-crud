var express = require("express");
var router = express.Router();

const DB = require('../module/db')

/* GET api page. */
router.get("/", function (req, res, next) {
  res.send("Hi, this is the API page.");
});

// Server gives back users/5 from users array
router.get("/:entity/:id", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let list = await db.find(req.params.id)
  res.json(list);
});

// Server gives back all of the users
router.get("/:entity/", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let list = await db.find();
  res.json(list);
});

// Create new user
router.post("/:entity/", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let newData = await db.create(req.body);
  res.json(newData);
});

// Update user
router.put("/:entity/:id", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let newData = await db.update(req.params.id, req.body);
  res.json(newData);
});

// Delete user
router.delete("/:entity/:id", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let deleted = await db.delete(req.params.id);
  res.json(deleted);
});

module.exports = router;
