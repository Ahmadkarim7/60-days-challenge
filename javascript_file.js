alert("Hello "+ "Wolrd");
//let var data type jjnuh
//length to count the length of the variable
var nome = "Donley";
nome.length;
console.log(nome.length);
alert("Hello");
//'
//Compose input (it will open a window in the top like alert to enter anyting)
prompt("Enter your name");//
//hihi
//slice and dise your strings
var secondname = "Robert";
secondname.slice(0,1); //0 is the index and 1(not included 1) is the character. so only print R
//slice (starting position, ending position)
secondname.slice(0,140);//it does not allow the input to be exceeded 140 characters

//toUpperCase()-method that changes all characters in upper case
secondname.toUpperCase();

//pracctice
var thirdname = prompt("Enter your name");
var firstchar = thirdname.slice(0,1);
var upperCastFirstChar = firstchar.toUpperCase();
var restOfName = thirdname.slice(1, thirdname.length); //whole idea is to make the first character upper case lever from entering name from the input


//Numbers  + - / * % (modules=reminder)
//increament decrement x = x + 1; x++; or x--; x = x + y; - x +=y;


//functions function name (){}

//function and parameters
//Three versions of functions --without parameter --  with parameter -- 

// 12.333 round down function floor() Math.floor

//challenge check how many days, weeks, and months are remaining if you live 90 years
function lifeRemainintg(age){
    var yearsremainng = 90 - age;
    var months = yearsremainng * 12;
    var week = yearsremainng * 52;
    var days = yearsremainng * 365;
    console.log("Remaining months are" + months +  "days are"  + days +  "and weeks are" + week );
}
lifeRemainintg(20);

//math power and exponent
Math.power();
Math.round(3.5);
//Math.power(base, exponent)
//
//Random number generation
var n = Math.random(); //generates random number everytime.
n = n * 6; //any time it runs it will create number below 6
n = Math.floor(n); //it will only create full numbers
console.log(n);  //psuedo code number can be checked in Khan Academy //floor mean full numbers not in decimals
//important - Math.round(); only creates randome number 

//Love calculator
prompt("Enter your name");
prompt("Enter their name?")
var lovecalculator = Math.random() * 100;
lovecalculator = lovecalculator + 1;
lovecalculator = Math.floor(lovecalculator);
alert("Your love score is " + lovecalculator + "%");

//If else statment 
if (lovecalculator === 100 ){
    alert("You should not leave this person")
}
else {
    alert("Keep it up")
}
//double == sign checks if they both are the same conditions
//triple === sign checks if they have the same data type
//comparators > < signs
// AND && 
// OR ||
// Not !

//Array 
var stgarray = ["AkD", "Dka"]
var arrayone = [1,2,3,4,5,6,7];
var myegg = arrayone [2];
arrayone.length;
arrayone.includes(5);//looking or searching in the array

var entername = prompt("Enter your name");

if (arrayone.includes(stgarray)){
    alert("welcome")
}
else{
    alert("Next time")
}

///looking for specific number
var output = [4,5,6]; //.push means adding the value in the array
output.push(3); //its add in the end of the array
//.pop(); means delete the last array
output.pop(4);
var count = 1;
function fizbiz(){
    if (count %3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    }
    if (count %3 == 0){
        output.push("Fizz")
    } else if(count %5 == 0){
        output.push("buzz");
    } 
    else{
        output.push(count);
    }
    output.push(count);
    count++; // or count = count + 1

    console.log(output)
}

//loops while run until true while ()-- state
//for(i=0; i<2; i++) == iterate
//else if only gets check if the first condition is false...

//Connecting JavaScript file with HTML =========> onload when program load this will do this
//always put js link in the end of the html file..


//======---> Document Object Model
//It changes the whole html into a tree like document under that html under that body. LIke hieracrchy of scale
//document; is the whole html file
//we use it to manipulate the objects from the files
//click()

//properties
// car.color = 0;
// innterHTML -- style -- firstchild  . dot notation
// and methods
//clidk() -- appendchild (); setAttribute ();
//method assoisiacate with object

document.getElementsByTagName("li"); //to target list item
document.getElementsByClassName("btn"); //target elements by class name
document.getElementById("btns"); //target by id which is a single item
document.querySelector("h1"); 
document.querySelectorAll("h1 .item"); //to select all the elements in the code from one element

document.querySelector("h1").style.color = "red";
//learn more about DOM in the internet

//class list property--- classList lets you change the CSS classes of an HTML element using JavaScript — you can add, remove, or toggle classes to control how the element looks or behaves.

//innerHTMl it changes the html code inside of it
//textContent only changes the text inside of html

//attributes are like <img id="photo" src="pic.jpg" alt="My photo">
//getAttribute means which attribute
//setAttribute means make changes ("your target attribut", "what changes you want to make")
