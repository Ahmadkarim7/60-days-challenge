alert("Hello "+ "Wolrd");
//let var data type
//length to count the length of the variable
var nome = "Donley";
nome.length;
console.log(nome.length);
alert("Hello");

//Compose input (it will open a window in the top like alert to enter anyting)
prompt("Enter your name");

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

//Random number generation
var n = Math.random(); //generates random number everytime.
n = n * 6; //any time it runs it will create number below 6
n = Math.floor(n); //it will only create full numbers
console.log(n);  //psuedo code number can be checked in Khan Academy
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

///