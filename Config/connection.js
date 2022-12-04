const mongoose = require("mongoose");

const connectionpOptions = {
  dbName: `resultsApp`,
};

const connectionDb = async () => {
  try {
    const con = await mongoose.connect(
      process.env.MONGO_URI,
      connectionpOptions
    );
    console.log(`connected ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectionDb;
