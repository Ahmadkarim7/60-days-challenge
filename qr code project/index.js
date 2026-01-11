//**
// WE ARE MAKING A QR CODE FOR LINK */

//We will be using two npm packages. ---inquirie and qr imgage  i 

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";



inquirer
  .prompt([{
    message: "Type your URL: ",
    name: "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err; 
        console.log("The file has been saved!");
});


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  /**
   * Synchronous = do one thing at a time, wait until it finishes
     Asynchronous = start a task, don’t wait, do other things, come back later
   */