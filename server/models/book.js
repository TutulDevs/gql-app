// mongoose model schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
  // mongoDB will provide the id
});

//export
module.exports = mongoose.model("Book", bookSchema);

// the Book will have the obj of the schema | Book: {key: value,}
