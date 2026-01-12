//Express is the fastest or efficient way for backend of javascript
//we get three things by using express

//WE get 
//Readability
//Less code
//Middle wave


/**
Node.js = engine
Express.js = backend framework built on Node */

// Database Applicaton Server = Backend also called Server side or server

//Today we will make our own server
//we will our computer is our server

//Six steps

//Create one directory
//Make a file
//Initialize NPM
//Install the express package
//start server --> node yourfile name

import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Server running on port ${port}. `);
})

/**Step-by-step:

Node loads Express

Express creates an app

Node opens port 3000

Server waits for HTTP requests

Callback runs → prints message */

/**🧠 Memory trick (use this forever)

import express → get the tool
express() → build the server
app.listen() → turn it on */

//This code imports Express, creates a server application, starts listening on port 3000, and prints a message once the server is running. The server stays alive and waits for incoming HTTP requests, but it won’t respond to anything until routes are defined.

// what is local host, When you use localhost, you are talking to your own machine, not the internet.
//what is port? ports are doors in the server

//sudo lsof -i -P -n | grep LISTEN---“Show me all programs that are currently listening on network ports on this machine.

