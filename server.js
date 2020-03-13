const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Place = require("./models/place");

// const uri = 'mongodb://admin:admin@cluster0-shard-00-00-faqqw.gcp.mongodb.net:27017,cluster0-shard-00-01-faqqw.gcp.mongodb.net:27017,cluster0-shard-00-02-faqqw.gcp.mongodb.net:27017/sample_airbnb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
// test Azure
const uri =
  "mongodb://admin:admin@cluster0-shard-00-00-faqqw.gcp.mongodb.net:27017,cluster0-shard-00-01-faqqw.gcp.mongodb.net:27017,cluster0-shard-00-02-faqqw.gcp.mongodb.net:27017/sample_airbnb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected"))
  .catch(err => console.log("Caught", err.stack));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World");
});

// การทำงาน Hello World!
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// html
app.get("/admin", (req, res) => {
  const web = `
    <h1> Admin Page</h1>
    <input type="text"> <button>Login</button>
    `;
  res.send(web);
});

// web API
app.get("/api/jobs", (req, res) => {
  // get data
  const jobs = {
    id: "001",
    owner: "Naka Hotel Patong",
    position: "Front Desk"
  };
  res.send(jobs);
});

// Get all listing
app.get("/api/airbnb/listings", async (req, res) => {
  // get data mongodb
  const query = {};
  const places = await Place.find(query);
  console.log(places);
  res.json(places);
});

// เริ่มเรียกใช้งาน
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
