document.getElementById("container").style.border="1px solid grey";
document.getElementById("container").style.margin="0px 470px 0px 450px";
document.getElementById("container").style.padding="10px 10px";
document.getElementById("container").style.height="577px";
document.getElementById("container").style.backgroundColor="grey";

for (var i = 1; i <= 30; i++){
	var button = document.createElement("button");
	button.id =`button${i}`;
	document.getElementById("container").appendChild(button);
	document.getElementById(`button${i}`).style.display="inline-block";
	document.getElementById(`button${i}`).style.position="relative";
	document.getElementById(`button${i}`).style.width="105px";
	document.getElementById(`button${i}`).style.height="87px";
	document.getElementById(`button${i}`).style.margin="5px 5px";
	document.getElementById(`button${i}`).innerText=`${i}`;
	document.getElementById(`button${i}`).style.backgroundColor="green";
	document.getElementById(`button${i}`).style.border="green";
	button.setAttribute("onclick",`rood(${i})`);
	function rood(nummer){              
		document.getElementById(`button${nummer}`).style.backgroundColor="red";
		document.getElementById(`button${nummer}`).style.border="red";
		document.getElementById(`button${nummer}`).setAttribute("onclick",`paars(${nummer})`);
	}                                   
	function paars(nummer){             
		document.getElementById(`button${nummer}`).style.backgroundColor="purple";
		document.getElementById(`button${nummer}`).style.border="purple";
		document.getElementById(`button${nummer}`).setAttribute("onclick",`blauw(${nummer})`);
	}                                   
	function blauw(nummer){             
		document.getElementById(`button${nummer}`).style.backgroundColor="blue";
		document.getElementById(`button${nummer}`).style.border="blue";
		document.getElementById(`button${nummer}`).setAttribute("onclick",`zwart(${nummer})`);
	}                                   
	function zwart(nummer){             
		document.getElementById(`button${nummer}`).style.backgroundColor="black";
		document.getElementById(`button${nummer}`).style.border="black";
		document.getElementById(`button${nummer}`).setAttribute("onclick",`verdwijn(${nummer})`);
	}                                   
	function verdwijn(nummer){          
		document.getElementById(`button${nummer}`).remove(button);
	}       
}
