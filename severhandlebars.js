const express = require("express");
const app = express();

const port = 3030;
//Loads the handlebars module
const handlebars = require("express-handlebars");

//Sets our app to use the handlebars engine
app.set("view engine", "handlebars");
//Sets handlebars configurations (we will go through them later on)
app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.use(express.static("public"));
app.get("/login", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("login", { layout: "index" });
});
app.use(express.static("public"));
app.get("/signup", (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render("signup", { layout: "index" });
});

app.listen(port, () => console.log(`App listening to port ${port}`));
