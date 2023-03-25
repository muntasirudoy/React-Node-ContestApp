const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
  contestCreatorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // reference to the User collection
  },
  contestTitle: {
    type: String,
    required: true
  },

  contestCreatorName: {
    type: String,
  },
  contestDetails: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  contestTags: {
    type: [String]
  },
  deadline: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  entries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entries' // reference to the Entry collection
  }]
});
module.exports = mongoose.model("Contest", contestSchema);
