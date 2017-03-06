

$(".button-search").html("It's reading me!");

/*
var giphys = ["Iron Man", "Captain America", "Hulk", "Hawk Eye", "Black Widow", "Agent Coulson", "Nick Fury", "Melinda May", "Thor"];

  function displayGifInfo() {

    var gifs = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=dc6zaTOxFJmzCy=&limit=10&rating=pg&r=json";

    // Creating an AJAX call for the specific gif being selected
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {

      var gifyDiv = $("<div class='movie'>");

      var rating = response.Rated;

      var pOne = $("<p>").text("Rating: " + rating);

      gifyDiv.append(pOne);

      var released = response.Released;

      var pTwo = $("<p>").text("Released: " + released);

      gifyDiv.append(pTwo);

      var plot = response.Plot;

      var pThree = $("<p>").text("Plot: " + plot);

      gifyDiv.append(pThree);

      var imgURL = response.Poster;

      var image = $("<img>").attr("src", imgURL);
      gifyDiv.append(image);

      $("add-gifs").prepend(gifyDiv);
    });

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


  $(".add-gifs").on("click", function(event) {
    event.preventDefault();
    var gifs = $("#added-character").val().trim();
    giphys.push(gifs);

    renderButtons();
  });

  // $(".gif").on("click", function() {
     
  //         var state = $(this).attr("data-state");

  //        if (state == "still") {
  //           $(this).attr('src', $(this).attr("data-animate"));
  //           $(this).attr("data-state", 'animate');
  //         } else if (state != "still") {
  //           $(this).attr('src', $(this).attr("data-still"));
  //           $(this).attr('data-state', "still");
  //         }

    
  //   });

$(document).on("click", ".gif", displayGifInfo);

renderButtons();



*/

