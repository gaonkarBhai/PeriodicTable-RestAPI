// only for updating all the data to atlas

require("dotenv").config();

require('./src/db/connection');

const periodic_table = require("./src/models/tableSchema");
const elementJson = require("./elements.json");

const start = async () => {
  try {
    await periodic_table.deleteMany();
    console.log("Updating...");
    await periodic_table.create(elementJson);
    console.log("Completed...");
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};
start();
