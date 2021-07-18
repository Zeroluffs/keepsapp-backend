const mongoose = require("mongoose");
const URI = "mongodb://mongo/keepsAPP";
require("dotenv").config({ path: "variables.env" });
mongoose
  .connect(URI, {
    // auth: {
    //   user: "root",
    //   password: "root",
    // },

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("DB is connected to", db.connection.host))
  .catch((err) => console.error(err));

module.exports = mongoose;
