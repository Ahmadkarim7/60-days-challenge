/***
 * Javascrip runtime
 * asychronous event-driven = 
 * we use node to use javascript in backend as well
 * Node Read Eval Print Loop
*/
 
//RePL read, eval, print, loop--> to open it just write node in terminal
//control c twice to exit the panel
//
console.log("Hello from Node");

//Native node module-->built in module --Runs JavaScript outside the browser

///A native Node module is a built-in module that comes with Node.js and does not need to be installed, similar to C++ standard libraries like iostream.


//File  system allow us to acces the code from local 

/**
 * How CJS works

You say:

“Give me the toy NOW”.  How ESM works

You say:

“I will need this toy later”
 */

//require
//➡️ A function that means: “Node, give me a built-in tool”


const fs = require("fs");
fs.writeFile("message.txt", "Hello from NodeJS!", (err)=>{
    if(err) throw err;
    console.log("The file has been saved!");
})

fs.readFile("./message.txt", "utf8",(err, data)=>{
    if(err) throw err;
    console.log(data);
});

/**That "utf8" means:

“Save this text using Unicode rules”

If you don’t write it, Node still uses UTF-8 by default. */