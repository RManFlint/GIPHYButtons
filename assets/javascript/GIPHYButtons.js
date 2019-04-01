
var rockerButtonsArray = ["Joey Ramone", "Johnny Rotten", "Iggy Pop", "Mick Jagger", "Roger Daltrey"];
//console.log(rockerButtonsArray);
/*var newRocker;

var wrongGuess = [];
var indexLength=0;
var playerWins = 0;
*/

$(document).on("click", ".rockStar", function() {
	$("#rockerGIFS").empty();
	//$("button").on("click", function() {
	// In this case, the "this" keyword refers to the button that was clicked
	var person = $(this).attr("data-name");
	console.log(person);

	// Constructing a URL to search Giphy for the name of the person who said the quote
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	  person + "&api_key=G8bzbqfK3z3GbTVircARgYTm2R9lLOjL&limit=10";

	// Performing our AJAX GET request
	$.ajax({
	  url: queryURL,
	  method: "GET"
	})
	  // After the data comes back from the API
	  .then(function(response) {
		$("#rockerGIFS").empty();
		// Storing an array of results in the results variable
		var results = response.data;

		// Looping over every result item
		for (var i = 0; i < results.length; i++) {

		  // Only taking action if the photo has an appropriate rating
		  if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
			// Creating a div for the gif
			var gifDiv = $("<div>");

			gifDiv.attr("class", "rockerGIFbutton");

			// Storing the result item's rating
			var rating = results[i].rating;

			// Creating a paragraph tag with the result item's rating
			var p = $("<p>").text("Rating: " + rating);

			// Creating an image tag
			var personImage = $("<img>");

			// Giving the image tag an src attribute of a proprty pulled off the
			// result item
			personImage.attr("src", results[i].images.fixed_height.url);

			// Appending the paragraph and personImage we created to the "gifDiv" div we created
			gifDiv.append(p);
			gifDiv.append(personImage);

			// Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
			$("#rockerGIFS").prepend(gifDiv);
		  }
		}
	  });
  });

function rockerButtonLoads(){

	// Deleting the movie buttons prior to adding new movie buttons
	// (this is necessary otherwise we will have repeat buttons)
	$("#rockerButtons").empty();

	// Looping through the array of movies
	for (var i = 0; i < rockerButtonsArray.length; i++) {

	  // Then dynamicaly generating buttons for each movie in the array.
	  // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
	  var a = $("<button>");
	  // Adding a class
	  a.addClass("rockStar");
	  // Adding a data-attribute with a value of the movie at index i
	  a.attr("data-name", rockerButtonsArray[i]);
	  // Providing the button's text with a value of the movie at index i
	  a.text(rockerButtonsArray[i]);
	  // Adding the button to the HTML
	  $("#rockerButtons").append(a);
	  //console.log(rockerButtonsArray);
	}
}
/*function submitRocker(){
	newRocker = $("#rockerInput").nodeValue;
	console.log(newRocker);
} */

	 $("#rockerSubmit").on("click", function(event){
		event.preventDefault();
		newRocker = $("#rockerInput").val();
		rockerButtonsArray.push(newRocker);
		rockerButtonLoads();
	 });
rockerButtonLoads();
/*window.onload =  function()
	{
		$("wordSubmit").onclick = wordLoad;
		$("letterSubmit").onclick = lGuess;	
	}
*/