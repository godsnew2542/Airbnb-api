const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// กำหนด + ดึงข้อมูล
const placeSchema = new Schema({
  _id: String,
  listing_url: String,
  name: String,
  summary: String,
  description: String,
  price: Number,
  amenities: [String],
  images: {
    picture_url: String,
    thumbnail_url: String
  }
})

const placeModel = mongoose.model("listingsAndReviews", placeSchema ,"listingsAndReviews");

module.exports = placeModel;
