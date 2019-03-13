var topics = ["dog", "cat"];

// make buttons of the inital items in the array
makeButtons(topics);

function addToArr(newtopic){
    //check if topic is already in the array
    if(!topics.includes(newtopic) && newtopic.length > 0){
        // push to the new topic to the array
        console.log(newtopic);
        topics.push(newtopic);
        console.log(topics);
    }

}

function makeButtons(topics){
    // Clear the div first to prevent duplicate buttons
    $("#topic-buttons").empty();

    for(var i = 0; i<topics.length; i++){
        // Create the button from the array
        var topicButton = $("<button>");
        // add class for ajax call
        topicButton.addClass("topic-button");
        // Give it an id based on the topic
        topicButton.attr("id", topics[i] + "-button");
        // Give it a value for the ajax call
        topicButton.val(topics[i]);
        // Give it text so the user knows what they are clicking on
        topicButton.text(topics[i]);
        // Append to the DOM
        $("#topic-buttons").append(topicButton);
        
    }
}

$("#submit-button").on("click", function(){
    event.preventDefault();

    //Get input (and make lower case to avoid duplicate entries)
    var newtopic = $("#topic-input").val().toLowerCase();

    //send it to the array function and to the make the buttons
    addToArr(newtopic);
    makeButtons(topics);

    // Clear the text field
    $("#topic-input").val("");  
});

// ajax time
// event listener for the topic buttons
$(document).on("click", ".topic-button", function(){
    console.log("Clicked " + $(this).val());

    var selectedTopic = $(this).val();

    // clear html if new button is pressed so there aren't so many gifs
    $("#topic-gifs").empty();

    // create query url with topic
    var apiKey = "kZhPaDkM9dYWuryCnV6m8v4pLMs1URMX";
    var limit = "10";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + selectedTopic + "&api_key=" +
                    apiKey + "&limit=" + limit;

    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        // Store the data we want from the response
        var results = response.data;

        // Loop through each result
        for(var i = 0; i < results.length; i++){
            // Create a new div for each result
            var topicDiv = $("<div>");

            // Create an element with the result's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // create an element for the actual gif
            var gif = $("<img>");

            // set the gif to the img element
            gif.attr("src", results[i].images.fixed_height.url);

            // append the rating and gif to the dive
            topicDiv.append(p);
            topicDiv.append(gif);

            // append to the html
            $("#topic-gifs").append(topicDiv);
        }
    });
});