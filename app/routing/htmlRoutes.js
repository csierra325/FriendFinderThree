




module.exports = function(app){
    //    * A GET Route to `/survey` which should display the survey page.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"))
    });
    
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"))
    });

}
