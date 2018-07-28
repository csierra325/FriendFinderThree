//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require("../data/friends")
// var main = require("../public/main")

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log(friends)
    });

    app.post("/api/friends", function (req, res) {
            var userInput = req.body;


            for (var i = 0; i < userInput.select.length; i++) {
                if (userInput.select[i] == "1 (Strongly Disagree)") {
                    userInput.select[i] = 1;
                } else if (userInput.select[i] == "5 (Strongly Agree)") {
                    userInput.select[i] = 5;
                } else {
                    userInput.select[i] = parseInt(userInput.select[i]);
                }
            }


            var bestMatchIndex = 0;
            var bestMatchDifference = 40;

            // loops through friends list
            for (var i = 0; i < friends.length; i++) {
                var totalDifference = 0;


                for (var index = 0; index < friends[i].scores.length; index++) {
                    // need to grab the scores of the array of friends minus the userInput.scores
                    var differenceOneScore = Math.abs(friends[i].scores[index] - userInput.select[index]);
                    totalDifference += differenceOneScore;

                };

                if (totalDifference < bestMatchDifference) {
                    bestMatchIndex = i;
                    bestMatchDifference = totalDifference;
                }
            }
            bestMatch = friends[bestMatchIndex];


            console.log(differenceOneScore);
            console.log(bestMatch);
            friends.push(userInput);
            res.json(bestMatch);
        })
    }
