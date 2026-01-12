
//HTTP request HyperText Transport Protocol -- language that allows computer to talk to each other on the internet

/**
 GET → get data request resource

POST → send data sending resources 

PUT → update data replace resource 

PATCH -> you want to update or patch resources--> patch only for specific resource 

DELETE → delete data
*/
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send("<h1>Hello </h1>");  //it sends to the browser
});

app.get("/about", (req, res)=> {
    res.send("<h1>About me</h1><p>My name is Ahmad</h1>");  //it sends to the browser
});
app.get("/contact", (req, res)=> {
    res.send("<h1>My contact is</h1><p>Not for you</h1>");  //it sends to the browser
});
app.listen(port, ()=> {
    console.log(`Server has started on port ${port}. `);
});

//WHen we are upadating or making changes in node(server) we close it and open it which a pain
//We can use nodemon it automitacally restarts node
//just use the word nodemon filename

// /Endpoints. forward slash the destination where you want to sell