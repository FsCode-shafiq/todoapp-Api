const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todapp"),
      { useNewUrlParser: true, useUnifiedTopology: true };
    console.log("Mongo Db connected sucessfully!");
  } catch (error) {
    console.log(`Unable to connect database: ${error.message}`);
  }
};

module.exports = connectDatabase;