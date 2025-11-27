var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i =0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    
});

}

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
