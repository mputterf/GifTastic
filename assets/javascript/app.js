var topics = ["dog", "cat"];

// make buttons of the inital items in the array
makeButtons(topics);

$("#submit-button").on("click", function(){
    //Get input (and make lower case to avoid duplicate entries)
    var newtopic = $("#topic-input").val().toLowerCase();

    //send it to the array function and to the make the buttons
    addToArr(newtopic);
    makeButtons(topics);

    // Clear the text field
    $("#topic-input").val("");
});

function addToArr(newtopic){
    //check if topic is already in the array
    if(!topics.includes(newtopic)){
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