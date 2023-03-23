const express = require("express");
const dbConnection = require("./config/db.js");
const userRouter = require("./Routes/userRoutes.js");

require("dotenv").config();
const app = express();
app.use(express.json());
dbConnection();

var cors = require("cors");
app.use(cors());

app.use("/api", userRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running");
});
