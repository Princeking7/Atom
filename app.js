// imports
 var express = require("express");
 var app = express();
 var port = 3000;

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//set views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", function(req,res){
res.render("index", {text: "this is ejs"});}
  );

  app.get("/about", function(req,res){
    res.render("about", {text: "This Is About Page"});}
      );










//listen on port 3000
app.listen(port, console.log("listening on port " + port));