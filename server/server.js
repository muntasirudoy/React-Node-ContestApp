const express = require("express");
const dbConnection = require("./config/db.js");
const userRouter = require("./Routes/userRoutes.js");
const contestRouter = require("./Routes/contestRoutes.js");
const entriesRouter = require("./Routes/entriesRoutes.js");

require("dotenv").config();
const app = express();
app.use(express.json());
dbConnection();

var cors = require("cors");
app.use(cors());



app.use("/", express.static("./uploads"))
app.use("/api", userRouter);
app.use("/api", contestRouter);
app.use("/api/entries", entriesRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is running");
});
