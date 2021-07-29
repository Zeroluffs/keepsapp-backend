const Keep = require("../models/Keep");

const keepCtrl = {};

keepCtrl.addKeep = async (req, res) => {
  const newKeep = new Keep({
    title: req.body.title,
    description: req.body.description,
    label: req.body.label,
    color: req.body.color,
    status: "active",
  });

  await newKeep.save();
  console.log(newKeep);
  res.send(newKeep);
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

keepCtrl.getKeepsLabel = async (req, res) => {
  const keeps = await Keep.find();
  const newKeeps = keeps.filter(
    (keep) => keep.label === req.params.label && keep.status === "active"
  );
  res.json(newKeeps);
};
keepCtrl.updateKeep = async (req, res) => {
  const response = await Keep.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  res.send(response);
};

keepCtrl.archiveKeep = async (req, res) => {
  await Keep.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.send("Keep  Archived");
};
module.exports = keepCtrl;
