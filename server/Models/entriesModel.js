const mongoose = require("mongoose");

const entriesSchema = new mongoose.Schema({
        contestId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Contest' // reference to the Contest collection
        },
        participateId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        participateName: {
          type: String,
          required: true
        },
        participateFile: {
          type: String,
          required: true
        },
        participateMarks: {
          type: Number,
          default: 0.01
        }
});

module.exports = mongoose.model("Entries", entriesSchema);

