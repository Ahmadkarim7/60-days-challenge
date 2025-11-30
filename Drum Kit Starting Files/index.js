//detecting key pressed
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i =0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
   
});

}

//this Click) — Think of this as "the button I touched"
//var audio = new Audio("sounds/tom-1.mp3");
//    audio.play();


//event listner is something JavaScript uses to wathc for an event. when that event occurs then it does its jobs
//it has two parameters-- first-- check or waiting for soemthing to happen like click, second parameter---> runs the function
//when we want to call a function we do functionName(); but in the event listner we dont do paranthesis because we are waiting for something to happen then it will run
// You can also use anonymus function. Instead of calling function in the second parameter, you can simply write that function without a name

//Parameters in funcions

function add (num1, num2){
    return num1 + num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function calculator(num1, num2, newfunc){
    return newfunc(num1, num2); // newfunc is basically calling previous function
}
calculator(5,5,multi); //its basically taking values into calculor and calling multi func that way both runs
debugger;
calculator(5,5,multi); //to check whats happening in each step

//high order functions that can take other functions as inputs

//New thing how to play audio or sounds in javaScript
//this = “the thing that is doing this action right now.”
//Because all the buttons use the same function, but each button needs to know:

//Which button did the user click?”

//this gives the answer.
//A switch statement is used when you want to check one value against many possible cases

//new creates a new object from a constructor function.
// MAke a new object from a constructor function.

//keydown anytime you press anykey it will take command that it was pressed
/*documentaddEventListener("keydown", function(){
    alert("Key was pressed");
})*/

//An event = something that happens.
//When an event happens (like a click or key press),
//JavaScript sends extra information about it.
//key tells you WHICH key was pressed.


//Detecting keyboard press
document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key){
    switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "l":
        var kickbase = new Audio("sounds/kick-bass.mp3");
        kickbase.play();
        break;
    default:
        break;
   }
};

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
//set timeout function
//setTimeout() is a function in JavaScript that lets you run code after a delay. --->It has two parameters. first --> This is what you want to happen later. Second--> This is how long to wait before running the function.
//1000 ms = 1 second