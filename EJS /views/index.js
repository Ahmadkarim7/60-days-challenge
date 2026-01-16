//Embeded JavaScript
//“EJS lets the server create HTML dynamically using JavaScript.”

//Instead of writing the same HTML again and again, you write one template, then fill it with different data.


//**👉 Templating = writing ONE HTML page with BLANK SPOTS 
// Those blank spots get filled with real data automatically.*/ */

//Separtion of Concerns--> DOnt mix fron end with back end

//EJS Templating for JavaScript 
//How does it work--- It runs javascript inside the html file ends with ejs file extantion

// res.sendFile() sends a file as-is --static file
//res.render() builds HTML using a template + data ---> dynamic
// specify the file then add a js objec† to pass over some properties

//Install EJs languag

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    const today = new Date();
    const day = today.getDay();
   // console.log(day);

   let type = "a weekday ";
   let adv = "it's time to work ";

   if(day == 0 || day === 6){
    type = "the weekend";
    adv = "it's time to have fun";

   }

    res.render("index.ejs", {dayType: type,
        advice: adv,
     });
});



app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
});


/**“Take the value of dayType from the server
and print it here.” */
// <%= advice %>


//EJS Tags
/**
Tag	Meaning	Prints Output?
<%= %>	Print value	✅
<% %>	Run logic	❌--excute means it runs but not display
<%- %>	Print raw HTML	✅ (unsafe) <%- "<strong>Bold</strong>" %>. <strong>Bold</strong>
<%# %>	Comment	❌ //
<%% %>	Escape tag	✅ actually shows the whole syntax
 */


//Template means dynamic
//render mean s building html dynamically using template

//every single line of javascript in ejs need ejs tags
