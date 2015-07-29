



//THIS IS THE OLDER WAY WITHOUT AN EVENT LISTENER; THE WHOLE CODE HOISTED WHEN WINDOW LOADS

window.onload = function(){

function flipOver(){
	var memes = document.getElementById("mems");
	if (flipIt.src.match("2x2a")){

		flipIt.src = "img/trololo.jpg";
		memes.innerHTML = "MEMERY";
		memes.style.color = "red";

	} else {

		flipIt.src = "img/2x2a.png";
		memes.innerHTML = "MEMORY";
		memes.style.color = "black";
	}
}
var flipIt = document.getElementById("img1"); // COULD I CHANGE THIS TO INLUDE ALL IMG IDS?
flipIt.onclick = flipOver;
};