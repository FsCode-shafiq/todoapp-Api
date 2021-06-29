const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todoapp"),
      { useNewUrlParser: true, useUnifiedTopology: true, useCreacteIndex: true };
    console.log("Mongo Db connected sucessfully!");
  } catch (error) {
    console.log(`Unable to connect database: ${error.message}`);
  }
};