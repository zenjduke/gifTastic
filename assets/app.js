


{/* <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div> */}


  for (var i = 0; i < results.length; i++) {
 
 // Creating and storing a div tag
 var row = $("<div>").addClass("row");
 var column = $("<div>").addClass("col s12 m6");
 var card = $("<div>").addClass("card");

 var gifDiv = $("<div>").addClass("card-image");
 var span = $("<span>").addClass("card-title").text("title");

 var gifContent = $("<div>").addClass("card-content");
 // Creating a paragraph tag with the result item's rating
 var p = $("<p>").text("Rating: " + results[i].rating);

 // Creating and storing an image tag and setting the src attribute of the image to a property pulled off the result item
 var gifImage = $("<img>");
 gifImage.attr("src", results[i].images.fixed_height_still.url).attr("gif-topic", topicArray[i]).attr("data-still", results[i].images.fixed_height_still.url).attr("data-animate", results[i].images.fixed_height.url).attr("data-state", "still");

 // Appending the paragraph to the gifContent div
 gifContent.append(p);
 // Appending the image and title to the gifDiv
 gifDiv.append(gifImage).append(span);

 card.append(gifDiv).append(gifContent);

 row.append(column).append(card);

 // Prependng the gifDiv to the HTML page in the "#gifs-appear-here" div
 $("#gif-view").prepend(row);
}