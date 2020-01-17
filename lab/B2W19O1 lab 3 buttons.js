document.body.style.backgroundColor="grey";
document.getElementById("container").style.border = "30px solid white";
document.getElementById("container").style.backgroundColor = "white";
document.getElementById("container").style.margin = "10px 350px 100px 350px";

var buttonGreen = document.createElement("button");
buttonGreen.id = "green";
buttonGreen.onclick = bgcGreen;
document.getElementById("container").appendChild(buttonGreen);
document.getElementById("green").innerText="Button 1";
document.getElementById("green").style.margin = "0px 5px 0px 80px";
document.getElementById("green").style.padding = "30px 76px 30px 76px";
document.getElementById("green").style.backgroundColor="green";

var buttonRed = document.createElement("button");
buttonRed.id = "red";
buttonRed.onclick = bgcRed;
document.getElementById("container").appendChild(buttonRed);
document.getElementById("red").innerText="Button 2";
document.getElementById("red").style.margin = "0px 5px 0px 0px";
document.getElementById("red").style.padding = "30px 76px 30px 76px";
document.getElementById("red").style.backgroundColor="red";

var buttonBlue = document.createElement("button");
buttonBlue.id = "blue";
buttonBlue.onclick = bgcBlue;
document.getElementById("container").appendChild(buttonBlue);
document.getElementById("blue").innerText="Button 3";
document.getElementById("blue").style.padding = "30px 76px 30px 76px";
document.getElementById("blue").style.backgroundColor="blue";

function bgcGreen(){
	document.body.style.backgroundColor="green";
}
function bgcRed(){
	document.body.style.backgroundColor="red";
}
function bgcBlue(){
	document.body.style.backgroundColor="blue";
}