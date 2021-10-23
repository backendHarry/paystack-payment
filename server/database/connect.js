require("dotenv").config({ path: "config.env" });
const mongoose = require("mongoose");

const connFunction = async (cb) => {
  try {
    const options = {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const connection = await mongoose.connect(process.env.MONGO_URL, options);
    console.log(`Database connected at ${connection.connection.host}`);
    cb();
    return connection;
  } catch (err) {
    console.log(err);
  }
};

module.exports = connFunction;
