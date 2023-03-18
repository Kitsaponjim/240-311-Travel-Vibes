const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 9000;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect("mongodb://127.0.0.1:27017/test-database", options);

const travelModel = mongoose.model(
  "travel",
  new mongoose.Schema(
    { name: String, image: String, description: String },
    { versionKey: false, timestamps: true }
  )
);

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  console.log("get");
  res.send("Hello Welcome to Web site");
});

// SQL -----------------------------

// get
app.get("/api", (req, res) => {
  console.log("Have req");
  travelModel
    .find({})
    .then((travels) => res.json(travels))
    .catch((error) => res.status(400).json({ message: "something is wrong" }));
});

// get by id
app.get("/api/:id", (req, res) => {
  console.log("Have req by id");
  const { id } = req.params;
  travelModel
    .findById(id)
    .then((data) => res.json(data || {}))
    .catch((error) => res.status(400).json(error));
});

//Create
app.post("/api", async (req, res) => {
  const { name, image, description } = req.body;
  const travel = new travelModel({
    name,
    image,
    description,
  });

  await travel.save();
  res.json({ message: "save!!" });
});

//update
app.post("/api/:id", async (req, res) => {
  console.log("Have update");
  const { id } = req.params;
  const { name, image, description } = req.body;

  const updated = {
    $set: {
      name,
      image,
      description,
    },
  };

  const travel = await travelModel.findByIdAndUpdate(id, updated, {
    new: true,
  });
  res.json(travel);
});

//delete
app.delete("/api/:id", async (req, res) => {
  console.log("Have delete");
  const { id } = req.params;

  await travelModel.findByIdAndDelete(id, {});
  res.json({ message: `${id} already remove` });
});

// SQL -----------------------------

app.listen(PORT, () => {
  console.log(`Is Connected => http://localhost:${PORT}`);
});
