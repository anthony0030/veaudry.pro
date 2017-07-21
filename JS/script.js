
	
var on=0;

function switch_face() {
	if (on==0) {
		document.getElementById('my_face').src ="http://www.gravatar.com/avatar/5b116beaa14acdb21cf5f33ecdd32be2?s=150";
		on=1;
	} 
	else {
		document.getElementById('my_face').src ="IMG/anthony/face.jpg";
		on=0;
	}
}