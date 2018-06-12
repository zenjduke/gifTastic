// This code will run as soon as the page loads
window.onload = function() {
  gifApp.renderButtons();
  $("#submit-search").on("click", gifApp.addButton);
};

$(document).on('click','img',function(){
  event.preventDefault();

      var state = $(this).attr("data-state");
      var animate = ($(this).attr("data-animate"));
      var still = ($(this).attr("data-still"));
      var src = $(this).find('img').attr('src');

      console.log(state);
      console.log(src);
      console.log("Animate= "+animate);
      console.log("Still = "+still);

      if (state === "still") {
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
      } 
      
      else {
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
      }
    });

  // Click event for searching 10 gifs from clicked button topic
$(document).on('click','.topic',function(){
  event.preventDefault();

    var gif = $(this).attr("gif-topic");
    console.log(gif);
 
    // Constructing a queryURL using the gif name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";
 
     // Performing an AJAX request with the queryURL
     $.ajax({
       url: queryURL,
       method: "GET"
     })
       // After data comes back from the request
       .then(function(response) {
         console.log(queryURL);
 
         console.log(response);
         // storing the data from the AJAX request in the results variable
         var results = response.data;
 
         // Looping through each result item
         for (var i = 0; i < results.length; i++) {

          // Creating a w3 cards for gif photo and title and button to "Learn More" about specific gif
          var gifContainer = $("<div>").addClass("w3-card-4").addClass("gif");
          // var gifTextBlock = $("<span>").addClass("w3-container w3-pale-red").text(results[i].rating);


          // Creating an image tag
          var gifImage = $("<img>");
          gifImage.attr("src", results[i].images.fixed_height_still.url).attr("gif-topic", topicArray[i]).attr("data-still", results[i].images.fixed_height_still.url).attr("data-animate", results[i].images.fixed_height.url).attr("data-state", "still");
          
          gifContainer.append(gifImage);

          // Prepending the gifContainer to the "#gifs-appear-here" div in the HTML
          $("#gif-view").prepend(gifContainer);
         }
       })
  });

// Initial array of topics
var topicArray = ["babies", "kids", "comedians", "moms"];

var gifApp = {

    renderButtons: function(){
        //Empty button div before rendering buttons
        $("#buttons-view").empty();
      
        // Looping through the array of topics
        for (var i = 0; i < topicArray.length; i++) {
        
          var g = $("<a>");
          // Adding a class of gif-btn to our button
          g.addClass("waves-effect waves-light btn topic");
          // Adding a data-attribute
          g.attr("gif-topic", topicArray[i]);
          // Providing the initial button text
          g.text(topicArray[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(g);
        }
    },


    addButton: function(event){
      event.preventDefault();
      // This line grabs the input from the textbox
      var gifSearch = $("#gif-input").val().trim();
   
      // Adding topic from the textbox to topics array
      topicArray.push(gifSearch);
   
      // Calling renderButtons which handles the processing of topics array
      gifApp.renderButtons();
      $("#gif-input").empty().attr("placeholder", "Search again.");
    },

};

