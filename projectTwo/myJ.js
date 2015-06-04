//
// Creating the variable for manipulation
//
var myHeadOne = document.createElement("h1");
var myParOne = document.createElement("p");
var myParTwo = document.createElement("p");
var myParThree = document.createElement("p");
var myParFour = document.createElement("p");
var myParFive = document.createElement("p");
var myParSix = document.createElement("p");
var mySay = document.createElement("h3");




//
// Making the text for the head and paragraphs
//
var headTextOne = document.createTextNode("Dwight Christian's Page");
var parTextOne = document.createTextNode("This is the middle column");
var parTextTwo = document.createTextNode("This is the left column");
var parTextThree = document.createTextNode("This is the right column");
var parTextFour = document.createTextNode("This is supposed to be the second paragraph on the right!");
var parTextFive = document.createTextNode("This is supposed to be the second paragraph on the left!");
var parTextSix = document.createTextNode("This is supposed to be the second paragraph on the middle!");
var myTextSay = document.createTextNode("This site is made almost entirely with JavaScript!");
// Aligning the main header to the center
myHeadOne.setAttribute("align", "center");
mySay.setAttribute("align", "middle");
// Assigning an off color to the main header
myHeadOne.setAttribute("style", "color:red");



//
// Adding the css styling through the style attribute
//
myParTwo.setAttribute("style", "background-color: red; text-align: center; float: left; width: 33.333%");
myParThree.setAttribute("style", "background-color: green; text-align: center; float: right; width: 33.333%");
myParOne.setAttribute("style", "background-color: yellow; text-align: center; display: inline-block; width: 33.333%");
myParFour.setAttribute("style", "background-color: blue; float: right; text-align: center; width: 33.333%");
myParFive.setAttribute("style", "background-color: grey; float: left; text-align: center; width: 33.333%");
myParSix.setAttribute("style", "background-color: purple; text-align: center; display: inline-block; width: 33.333%");
mySay.setAttribute("style", "background-color: orange; text-align: center; width: 33.333%;");
// Adding the text child to the element parent
myHeadOne.appendChild(headTextOne);
myParOne.appendChild(parTextOne);
myParTwo.appendChild(parTextTwo);
myParThree.appendChild(parTextThree);
myParFour.appendChild(parTextFour);
myParFive.appendChild(parTextFive);
myParSix.appendChild(parTextSix);
mySay.appendChild(myTextSay);



//
// Adding the head and paragraph children to the content parent
//
document.getElementById("content").appendChild(myHeadOne);
document.getElementById("content").appendChild(myParOne);
document.getElementById("content").appendChild(myParTwo);
document.getElementById("content").appendChild(myParThree);
document.getElementById("content").appendChild(myParFour);
document.getElementById("content").appendChild(myParFive);
document.getElementById("content").appendChild(myParSix);
document.getElementById("content").appendChild(mySay);