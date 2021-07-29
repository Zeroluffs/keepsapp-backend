const express = require("express");
const router = express.Router();

const keep = require("../controllers/keep.controller");

router.get("/", keep.getKeeps);
router.get("/label/:label", keep.getKeepsLabel);
router.post("/", keep.addKeep);
router.delete("/:keepID", keep.deleteKeep);
router.put("/:id", keep.updateKeep);
router.patch("/:id", keep.archiveKeep);

module.exports = router;
