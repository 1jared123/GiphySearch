$(document).ready(function() {  


var giphys = ["Iron Man", "Captain America", "Hulk", "Hawk Eye", "Black Widow", "Agent Coulson", "Nick Fury", "Melinda May", "Thor"];

function displayGifInfo() {

  var gifs = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs + "&limit=10&rating=pg-13&api_key=dc6zaTOxFJmzC";

  //  http://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=dc6zaTOxFJmzC  

  // Creating an AJAX call for the specific gif being selected
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    var results = response.data;
    console.log(results);
    $(".results").empty();

    for (var i = 0; i < results.length; i++) {

      // var gifyDiv = $("<div class='greatGif'><br>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var personImage = $("<img>");

      personImage.addClass("pausePlay");

      personImage.attr("src", results[i].images.fixed_height_still.url);

      personImage.attr("data-still", results[i].images.fixed_height_still.url);

      personImage.attr("data-animate", results[i].images.fixed_height.url);

      personImage.attr("data-state", "still");

      // gifyDiv.prepend(p);
      // gifyDiv.prepend(personImage);

     $(".add-gifs").prepend(p);
     $(".add-gifs").prepend(personImage);
      };
    })

  
}

// Function for displaying movie data
function renderButtons() {

  $(".button-search").empty();

  for (var i = 0; i < giphys.length; i++) {

  var a = $("<button>");

  a.addClass("gif");

  a.attr("data-name", giphys[i]);

  a.text(giphys[i]);

  $(".button-search").append(a);
  }
}


$("#add-gif").on("click", function(event) {

  event.preventDefault();

  var jifs = $("#added-character").val().trim();

  giphys.push(jifs);

  renderButtons();
});

function pauseAndPlay() {
  var state = $(this).attr("data-state");

       if (state === "still") {
          $(this).attr('src', $(this).attr("data-animate"));
          $(this).attr("data-state", 'animate');
        } else if (state !== "still") {
          $(this).attr('src', $(this).attr("data-still"));
          $(this).attr('data-state', "still");
        }
}

$(document).on("click", ".pausePlay", pauseAndPlay);

$(document).on("click", ".gif", displayGifInfo);

renderButtons();



})

