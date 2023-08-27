const mongoose = require("mongoose")
// "mongodb://127.0.0.1:27017/periodic_table";
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));