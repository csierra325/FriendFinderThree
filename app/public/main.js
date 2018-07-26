$(document).ready(function () {

    $(".btn").on("click", function (event) {
        console.log("I've been clicked!");
        event.preventDefault();
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            select: []
        };

        var select = $(".selection")
        for (var i = 0; i < select.length; i++) {
            console.log(select[i].value);
            newFriend.select.push(select[i].value);
        }

        console.log(newFriend);

        $.post("/api/friends", newFriend, function (data) {

            console.log("survey.html", data)
            $("#name").val("");
            $("#photo").val("");
            $(".selection").val("");

        })


        $.post("/api/friends", newFriend, function (data) {

           
            $("#matchName").text(data.name);
            $("#matchImg").attr(data.photo);
            $("#resultsModal").modal(".selection");

            $("#name").val("")
            $("#photo").val()
        
        })

    });

    $('#closeModal').click(function() {
        $.get('/',function(req,res){
        location.replace(res);
        })
    });

});

