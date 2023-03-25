const Contest = require("../Models/contestModel.js");
const Entries = require("../Models/entriesModel.js");

exports.getContest = async (req, res) => {

  const allContestByUser = await Contest.find({
    contestCreatorId: req.params.id,
  });
  res.status(200).json({
    message: "Get all contest",
    data: allContestByUser,
  });
};

exports.getSignleContest = async (req, res) => {
  let populated = await Contest.findOne({ _id: req.params.id }).populate({
    path: "entries",
  });

  res.status(200).json({
    message: "Get all contest",
    data: populated,
  });
};

exports.getPublicContest = async (req, res) => {
  const contestInfo = await Contest.find();
  res.status(200).json({
    message: "Get all contest",
    data: contestInfo,
  });
};

exports.getSignlePublicContest = async (req, res) => {

  let populated = await Contest.findOne({ _id: req.params.id }).populate({
    path: "entries",
  });
  res.status(200).json({
    message: "Get all contest",
    data: populated,
  });
};

exports.createContest = async (req, res) => {

  const contest = new Contest(req.body);
  await contest.save();
  res.status(200).json({
    message: "Successfully posted a new contest",
    data: contest,
  });
};
