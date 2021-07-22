const Keep = require("../models/Keep");

const keepCtrl = {};

keepCtrl.addKeep = async (req, res) => {
  const newKeep = new Keep({
    title: req.body.title,
    description: req.body.description,
    label: req.body.label,
    color: req.body.color,
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
  console.log(keeps);
  res.json(keeps);
};

keepCtrl.updateKeep = async (req, res) => {
  await Keep.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  res.send("Keep  Updated");
};
module.exports = keepCtrl;
