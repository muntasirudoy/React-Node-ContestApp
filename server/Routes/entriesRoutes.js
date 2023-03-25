let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  uuidv4 = require("uuid/v4"),
  router = express.Router();
const DIR = "./uploads/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
// User model
let Entries = require("../Models/entriesModel.js");
const Contest = require("../Models/contestModel.js");
const { findById } = require("../Models/entriesModel.js");
router.post("/",express.static("./uploads"), upload.single("participateFile"), async (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const { contestId, participateId, participateName } = req.body;
  const entries = new Entries({
    contestId,
    participateId,
    participateName,
    participateFile: url +"/uploads/" + req.file.filename,
  });
  
  let obj = await Contest.findById(entries.contestId)
  let updateP =  await Contest.updateOne({_id: entries.contestId}, {$set: { entries: [...obj.entries,entries]}},{new : true})

  entries
    .save()
    .then((result) => {
      res.status(201).json({
        message: " successfully submitted!",
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});


router.put("/:id", async(req,res)=>{

  const {
    participateMarks
  } = req.body



  let obj = await Entries.findById(req.params.id)
 let resp = await Entries.updateOne({_id: req.params.id}, {$set: {participateMarks}},{new : true})

 res.status(200).json({
  message:"success",
  data:resp
 })

})
router.get("/", (req, res, next) => {
  Entries.find().then((data) => {
    res.status(200).json({
      message: "User list retrieved successfully!",
      users: data,
    });
  });
});
module.exports = router;
