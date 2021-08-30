const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin request
app.use(cors());

// connect to mLab db
mongoose.connect(process.env.MLAB_API_KEY);
mongoose.connection.once("open", () => {
  console.log("connected to mLab 🚀");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property | schema: schemaName
    schema,
    graphiql: true,
  })
);

// listen the port
app.listen(4000, () => {
  console.log("Now browse to localhost:4000/graphql");
});
