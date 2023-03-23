const mongoose = require("mongoose");

const connection = () => {
  mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("DB Contected");
  });
};

module.exports = connection;
