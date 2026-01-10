/**
 * Note Package Manger
 * 
 * Place which collects nodes which people have made through git
 * Native the tool we have at home default one
 * but npm is from the people or outside or we can say from the community to the other developers
 * Initilise NPM
 * npm init--> code
 * npm init creates a package.json file that initializes a Node.js project and stores basic project information.
It prepares the folder so you can manage dependencies and scripts using npm.
 */

//npm init creates package.json, which defines a Node project’s identity, entry file, scripts, and dependencies so npm can manage it.

 //Now lets install the package
 //npm install <something> --<> name of the package
 //we find these packages in npmjs.com
 //npm i sillyname-> you can also install multiple packages at a time
 //now we find a new attribute in our json file which is called dependenciew which means now it depends on this node


 //lets try how to use it
 //It will be mentioned in that website

 /*
 var generatName = require("sillyname");
 var sillyName = generatName();

 console.log(`My name is ${sillyName},`);*/

 //ECMAScript Modules (ESM) are the official JavaScript module system that let you split code into files and use import / export to share code between them.

 //CJS (CommonJS) is the older module system used by Node.js to share code between files using require() and module.exports

 //IMPORTANT
 //we usually use require in defuault node but we can play with it/ Go to json file change type from common to model
 //Then we do import NAME from "node name" like here we have "sillyName"

import { randomSuperhero } from 'superheroes';

const hero = randomSuperhero();
console.log(`My name is ${hero}`);