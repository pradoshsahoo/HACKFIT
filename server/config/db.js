const mongoose = require("mongoose");
exports.dbConn = async () => {
  try {
    const dbURL =
      "mongodb+srv://pradoshsahoo:pradosh123@cluster0.jpci9.mongodb.net/hackfitdb?retryWrites=true&w=majority";
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected`);
  } catch (err) {
    console.log(`Database connection error ${err.message}`);
  }
};
