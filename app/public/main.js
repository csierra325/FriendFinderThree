
// $(document).ready(function () {

//     $(".btn").on("click", function (event) {
//         console.log("I've been clicked!");
//         event.preventDefault();
//         var newFriend = {
//             name: $("#name").val().trim(),
//             photo: $("#photo").val().trim(),
//             select: []
//         };

//         var select = $(".selection")
//         for (var i = 0; i < select.length; i++) {
//             console.log(select[i].value);
//             newFriend.select.push(select[i].value);
//         }

        

//         $.post("/api/friends", newFriend, function (data) {

//             console.log("survey.html", data)
//             $("#name").val("");
//             $("#photo").val("");
//             $(".selection").val("");

//         })


//         $.post("/api/friends", newFriend, function (data) {

//            console.log(data)
//             $("#match_name").text(data.name);
//             $("#perfect_match_image").attr(data.photo);
//             $("#myModal").modal("toggle");

        
//         })

//     });

//     // $('#closeModal').click(function() {
//     //     $.get('/',function(req,res){
//     //     location.replace(res);
//     //     })
//     // });
    
// });

