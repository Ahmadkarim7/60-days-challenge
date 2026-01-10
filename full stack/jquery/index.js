$(document).ready(function(){
jQuery("h1").css("color", "red");
});
 //jquery and $ is the same thing
 //$("h1").css("color", "yellow");

 //with jquery we can access class from the css file. 
 //for example I want to add a class which is in my css file and want to add into the html element.i can do
 $("elementName").addClass("className");
// we can also check if it has a class and can remove clas

//📌 Why we write event

//We write event (or e, evt, anything) so we can access details about what happened.

//you can add new text 
$("h1").text("bye");  //innerhtml = html


//Manipulate attribute--attribute are like a 
$("img").attr("src");
// $("a").attr("which attribute","what to add or to make
//");

//how to add eventlistner using jquery
//NOte event listener only works when you click on the event here like in h1
$("h1").click(function(){
    $("h1").css("color", "purple");
});

for(var i= 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color = "purple";
    });
}; //---> this same code we can write in jquery
$("button").click(function(){
    $("h1").css("color", "purple");
})


//anytime you enter something in the input it will print that in place of h1
$("input").keydown(function(event){
    $("h1").text(event.key);
})

//when you hower it will change the color 
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
})


//Before method-- add something before something eg
$("h1").before("<button>New</button>");
//The element exists only while the page is open for both before and after method
//we can also use append() and prepend() method

//Animation
//hid()
//toggle go and comeback
//fadeIn() slowly makes an element appear.
//fageIn() like wise and opposite way of fadeIn
//fadtoggle
//slideUp
//slidDown
//slidToggle
//.annimat({ use css property here to make it manual animation})

$("button").on("click", function(){
    $("h1").toggle()//you cant change the color but can change size, opacity and other things to make it animated
})