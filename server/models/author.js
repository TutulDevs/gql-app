// mongoose model schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number,
  // mongoDB will provide the id
});

//export
module.exports = mongoose.model("Author", authorSchema);

// the Author will have the obj of the schema | Author: {key: value,}
