
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 4000;
var app = express();


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(express.static(path.join(__dirname, "app/public")));
app.use(express.static(path.join(__dirname, "app/data")));
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});