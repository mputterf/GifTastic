var buttonArr = ["dog", "cat"];

makeButtons(buttonArr);

$("#submit-button").on("click", function(){
    //Get input (and make lower case to avoid duplicate entries)
    var newAnimal = $("#animal-input").val().toLowerCase();

    //send it to the array function and to the make the buttons
    addToArr(newAnimal);
    makeButtons(buttonArr);

    // Clear the text field
    $("#animal-input").val("");
});

function addToArr(newAnimal){
    //check if animal is already in the array
    if(!buttonArr.includes(newAnimal)){
        // push to the new animal to the array
        console.log(newAnimal);
        buttonArr.push(newAnimal);
        console.log(buttonArr);
    }

}

function makeButtons(buttonArr){
    // Clear the div first to prevent duplicate buttons
    $("#animal-buttons").empty();

    for(var i = 0; i<buttonArr.length; i++){
        // Create the button from the array
        var animalButton = $("<button>");
        // Give it an id based on the animal
        animalButton.attr("id", buttonArr[i] + "-button");
        // Give it a value for the ajax call
        animalButton.val(buttonArr[i]);
        // Give it text so the user knows what they are clicking on
        animalButton.text(buttonArr[i]);
        // Append to the DOM
        $("#animal-buttons").append(animalButton);
        
    }
}