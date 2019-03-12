var buttonArr = ["dog", "cat"];


$("#submit-button").on("click", function(){
    //Get input (and make lower case to avoid duplicate entries)
    var newAnimal = $("#animal-input").val().toLowerCase();
    //send it to function to make the buttons
    makeButtons(newAnimal);
});

function makeButtons(newAnimal){
    //check if animal is already in the array
    if(!buttonArr.includes(newAnimal)){
        // push to the new animal to the array
        console.log(newAnimal);
        buttonArr.push(newAnimal);
        console.log(buttonArr);
    }
}