const express = require("express");
const router = express.Router();

const keep = require("../controllers/keep.controller");

router.get("/", keep.getKeeps);
router.post("/", keep.addKeep);
router.delete("/:keepID", keep.deleteKeep);

module.exports = router;
