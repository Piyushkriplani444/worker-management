// const { default: mongoose } = require("mongoose");

import mongoose from "mongoose";
async function connectToMongoDB(url: string) {
  return mongoose.connect(url);
}

export default connectToMongoDB;
