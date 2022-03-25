const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connection to Database SUCCESSFUL. Name: ${conn.connection.name} Port: ${conn.connection.port} Host: ${conn.connection.host}`
        .brightGreen.underline
    );
  } catch (err) {
    console.log(
      "ERROR: Connection to Database UNSUCCESSFUL".brightRed.underline
    );
    console.log(err.message.red.underline);
    process.exit(1);
  }
};

module.exports = connectDB;
