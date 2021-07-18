const Keep = require("../models/Keep");

const keepCtrl = {};

keepCtrl.addKeep = async (req, res) => {
  const newKeep = new Keep({
    title: req.body.title,
    description: req.body.description,
  });

  await newKeep.save();
  res.send("keep saved");
};

keepCtrl.deleteKeep = async (req, res) => {
  await Keep.findByIdAndRemove(req.params.keepID);
  res.send("keep deleted");
};

keepCtrl.getKeeps = async (req, res) => {
  const keeps = await Keep.find();
  res.json(keeps);
};
module.exports = keepCtrl;
