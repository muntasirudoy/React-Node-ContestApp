const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
  contestCreatorId: {
    type: String,
    required: true,
  },
  contestCreatorName: {
    type: String,
    required: true,
  },
  contestTitle: {
    type: String,
    required: true,
  },
  contestDetails: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  contestTags: {
    type: String,
  },
  dadeline: {
    type: Date,
  },
  entries: [],
});

module.exports = mongoose.model("contest", contestSchema);
