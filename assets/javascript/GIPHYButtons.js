
var rockerButtonsArray = ["Joey Ramone", "Johnny Rotten", "Iggy Pop", "Mick Jagger", "Roger Daltrey"];
//console.log(rockerButtonsArray);
/*var newRocker;

var wrongGuess = [];
var indexLength=0;
var playerWins = 0;
*/

$(document).on("click", ".rockStar", function() {
	$("#rockerGIFS").empty();
	var person = $(this).attr("data-name");
	console.log(person);
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	  person + "&api_key=G8bzbqfK3z3GbTVircARgYTm2R9lLOjL&limit=10";

	$.ajax({
	  url: queryURL,
	  method: "GET"
	})

	  .then(function(response) {
		$("#rockerGIFS").empty();
		//note results is an array
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
		  if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
			// Creating a div for the gif
			var gifDiv = $("<div>");

			gifDiv.attr("class", "rockerGIFbutton");
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);
			var personImage = $("<img>");

			// Giving the image tag an src attribute of a proprty pulled off the
			// result item
			personImage.attr("src", results[i].images.fixed_height_still.url);
			personImage.attr("data-still", results[i].images.fixed_height_still.url);
			personImage.attr("data-animate", results[i].images.fixed_height.url);
			personImage.attr("class", "rockStarImage");
			// Appending the paragraph and personImage we created to the "gifDiv" div we created
			gifDiv.append(p);
			gifDiv.append(personImage);
			$("#rockerGIFS").prepend(gifDiv);
		  }
		}
	  });
  });
  //$(".rockStarImage").on("click", function() {
	$(document).on("click", ".rockStarImage", function() {
		console.log("GIF click works and this is " + this);
	// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
	var state = $(this).attr("data-state");
	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
	// Then, set the image's data-state to animate
	// Else set src to the data-still value
	if (state === "still") {
	  $(this).attr("src", $(this).attr("data-animate"));
	  $(this).attr("data-state", "animate");
	} else {
	  $(this).attr("src", $(this).attr("data-still"));
	  $(this).attr("data-state", "still");
	}
  });
function rockerButtonLoads(){
	$("#rockerButtons").empty();

	// Looping through the array of movies
	for (var i = 0; i < rockerButtonsArray.length; i++) {

	  // Then dynamicaly generating buttons for each rockStar in the array.
	  // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
	  var a = $("<button>");
	  a.addClass("rockStar");
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