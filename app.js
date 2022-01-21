const express = require("express");
const expressOasGenerator = require("express-oas-generator");
const bodyParser = require("body-parser");
var path = require("path");
const app = express();
expressOasGenerator.init(app, {});
const database = require("./config/database");
const server = require("./config/server");
const bookRouter = require("./routes/bookRouter");
const index = require("./routes/index");
database.databaseConnection();
var serverConfig = function() {
  const port = process.env.PORT || 3000;
  return port;
};
app.listen(serverConfig(), () => console.log(`Listening port 3000`));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(bodyParser.json());
app.use("/", index);
app.use("/api/products", bookRouter);

//GET Books Request
