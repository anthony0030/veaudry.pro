
	
var on = true;

function switchFace() {
	if (on) {
		document.getElementById("my_face").src ="https://www.gravatar.com/avatar/5b116beaa14acdb21cf5f33ecdd32be2?s=150";
		on = true;
	} 
	else {
		document.getElementById("my_face").src ="IMG/anthony/face.jpg";
		on = false;
	}
}