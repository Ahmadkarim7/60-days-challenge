//html 5
//<h1>
//<br/>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//<hb/>
//<ul>
// <li>
// </ul>
//order and unode list
//<ol>
//  <li></li>
//</ol>
////
//
//
//
//nesting and Identition --ul list inside ul list
// which means  list inside the list
//<a> we use it for link like <a href="link"> content </a> dragable=true (attribut)
//image <img src="url"/>---> image url after the linke/100 --slash after that decides what is the size of the image is
//Abslute c:project/Images/cat.png
//  Relative (relative to something) shorter-- ../essay.docs .. go up a level---- .(stay in the current directory and look for it)
//You can direct(find) any files
//Root is the top file --THen project fiels --- images we can search like this
//Additional index.html files for additional pages
//
//THe html Biolerpate
//the structuure of html explanation

//hosting webiste with githib
//
//should chekc gpt what is capston project
//
//css
//property : value
//css selector
//#id(only for one(should be unique)) and class (for any tag we give this class it would work ).
//p[attribute]{}
//universal selector
//*{ for everything}

//css color
//color hun webiste for colors
// color : #hexcodeka

//font properties
//weight , size, and family of font
//1px = 1/96
// 1pt 1/72 inch -->point
//em relative to the parent tag
//rem relative to the root
//font weight bold or regular
//font family name, and supporting. FOr example if font was not found in that system that it will change it for the next one
//You can found in the GOogle fonts
//cs inspection   developer mode (contorl + shift + i) or f12 go to element style
//cs  overview
// border : thickness, type like solid, color
// left to right. first, second, third, fourth. Clock Vise
// padding The space inside the border — between the content and the border.
//The space outside the element’s border
//<div>Content</div>---> A container
//Pesticide, extension to check div elements size
//Cascading style sheets
//Position --->you will see the last property; for example: li{
//color: red;
//color: blue;}--> so this blue will print
// !important you can use this word to give importance
//combine selectors:
/*
parent and child
div
parent > child {}
descendant and ancestor
descendant anscestor{}
selectorselector{}
//CSS positioning
//
static positioning --> Default on top of each other

Relative positioning --> you can move your position from the original

Absloute positioning ---> Your position is the decendant of ancestor your ancestor is the web page not the div. Unless you gvie relative position to your div then you can move
Static → can’t move with top, left, right, or bottom.

Relative → starts in normal flow like static, but can be nudged with top, left, etc.

💡 So, relative can move, static stays put.

//down abslute on top relative
4️⃣ If Large = Fixed, Small = Absolute
Result: The small box will position itself inside the fixed large box, and when the large box stays on screen during scrolling, the small box will stay inside it.

Why: Absolute always looks to the nearest positioned ancestor — fixed counts as “positioned.”


*/

//Fixed Position sites in the browser even if you move

/*Day 2 */

//Display
//inline Only the size of the content
// Block the full page
//Inline block we can customize width and length

//CSS Float
//move to left or right
//clear---- if you dont want to have everything on one side float you can use this clear property

//Responsive
// Media Queries
//--> (its break point inside the parenthises--->@media (max-width: 600px){} you can use min or mix.. or you can say @media (max-width: 600px) and {}@media (max-width: 900 px){}

//CSS Grid
// colum lfr and for row we set size

//CSS Flexbox you make your box then you can give each side its own flex size

//Bootstrap Framwork use classes
//12 divsion system divide the whole width into 12 size

//Flexbox Display : flex use property gap: 10px;
///Inline flex we use it to put many elements in the same width sieze
//Flex box is put in a container

//Flex Direction: how to modify
//flex-direction: row; set to row left to right
//flex-direction: column; up to down
//flex basis for the size by targeting the children we can use > sign for child elements

//fexlible layout
//flex order
//flex wrap: nowrap
//flex wrap: wrap; use it if width finishes use down line
//flex-wrap: reverse;
//justify-content: flex-start; everything starts in the beginning.
//justify-content: center; everything in center
//justity-content: space-between;

//align itmes: flex-start; in this type we give value to container then this item moves in the container according to the style
//align-self: flex-start;
//align-content:

//align-items – Aligns items inside each flex line
//align-content – Aligns multiple flex lines as a group

// max-width → never get wider than this
// min-width → never get narrower than this
//flex-grow – How much it expands when there’s extra space
//flex-shrink – How much it shrinks when space is tight
//flex: 1 2 3; grow shrink equal

//CSS Grid 2D
//Display grid grid-template-columns: 1fr 2fr; means there are two columns in the things. One fraction will take place of 25 percent, then the second one will take place of 50 percent
//same for rows as well

//Grid size you can use auto attribute
//Fixe, franctional, auto,minmax size grid
//grid-template-columns: 200px minmax(400px, 800px)
//First column = locked at 200px.
//Second column = flexible, but with a safety minimum (400px) and maximum (800px).

//Repeat (2(this many time repeat), 200px(size))

//Grid item placement
//Make container--- grid items inside the container. Rows and columns. Inside that grid we call it grid cell and give size to it
//grid lines we control with gap

//We use flex box and grid together

//grid-column: span 2; means

//“This box should take up two columns in the grid instead of just one.”
//If your grid has 3 columns, it actually has 4 vertical lines:

//Copy
//Edit
//| 1 | col1 | 2 | col2 | 3 | col3 | 4 |
//grid-column-start → the line number where the item starts.

//grid-column-end → the line number where the item ends.

//grid-column-start
//grid-column-end
//order you can give order where you can put your object
//grid area

//grid-row
//grid area

//Bootsrap framwork pre defined classes
//we use by cdn links just before body also we use the second link as well
//Card use flexbox and bootsrap

//Bootstrap Layout
//container-sm /md/lg/xl/xxl/fluid
//rows row-number and coumns col-number
//breakpoints col-sm-2
//multiple breakpoints col-sm-12 col-md-8 col-lg-4--> we can use in one container

//Bootstrap component to get more idea go to bootstrap check the design and copy that code
//Buttons btn btn-colorname
//Cards
//Navs
//svg through bootstrap use icone classes
//forms
//columns with icon
//carousels
//footer
//spacing margin m5-5 maximum
//dark mode  in the html data-bs-theme="dark"
//w3 school bootstrap
//you can use onlin paid templates
//TinDog Page make sure to watch that video and make that website as your prject.......

//Introduction to Web Design
//Colour Theory you have to be mood of the color
//Red color
//Yellow headlines
//Green Fresh
//Blue trust
//Purple wealth
//Analogous colors
//Adobe color website
//Always only use 2 or 3 colors no more than that

//Typography
//Only use two fonts in the design
//There are two families; Serif family
//For old fashion thing use old font if its new thing use modern font
//sen-serif

//User Interface (UI)Design
//Establish a heirarchy in the design
//Focus on Color
//Focus on Size
//Layouts
//Alignment how do you position things on the screen
//White space or empty place
//Audience

//User Experience (UX)
//Always keep things simple
//Consistency keep
// Reading pattern using f and z layout
//
//

//Javascript
//console vs snipped
//alert("Hello world");
//You can use either single or double quote in the text
//"Hello" or 'Hello' same thing

//Data type
//typeof build in function to check data type
/**
 * string 
 * numbers
 * boolean
 * 
 */
//variable  var x = "Adil";
// var yourname = prompt("what is your name");
//
/** 
 * prompt() - cin
 */
//Done Nov 14
//No change
//
 

























