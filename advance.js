//JavaScript Objects
//Creating an object 
var bellboy1 = {
    name: "Khan",
    place: "USA"
}
//

//constructor function
//for constructor function first alphabet needs to be capitalized
function Names (name, age){
    this.name = name;
    this.age = age;
    this.time = function(){
        alert("Rewrite your name")

    }

}
//initialize objects
var bellboy = new Names ("Khano", 19);
//this new means a object we are making//“Make a fresh new object using the template Names, and give it these values.

//Methods A method is just a function that belongs to an object.

//High order function ---those functions that can take input

//A callback function is a function that you pass as an argument to another function, and that other function calls it later.
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Ahmad");
}

processUser(greet);

document.addEventListener("keydown", function(event){
    console.log(event);
});


//Adding Animation into the website
