var myHead = document.createElement("h1");
var myPar = document.createElement("p");

var h1Text = document.createTextNode("Did You know?");
var paraText = document.createTextNode("California produces over 17 million gallons of wine each year!");

myHead.appendChild(h1Text);
myPar.appendChild(paraText);

document.getElementById("abc").appendChild(myHead);
document.getElementById("abc").appendChild(myPar);