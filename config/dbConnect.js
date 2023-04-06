const mongoose = require("mongoose");

const url = process.env.DB_CONECT;
const options = { useNewUrlParser: true, useCreateIndex: true }

const dbConnect = async () => {
  try {
    await mongoose.connect(url, options);

    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = dbConnect;


