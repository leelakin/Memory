
window.onload = function(){
	var allImgs = document.getElementsByClassName("pft"); // THIS RETURNS A HTML COLLECTION WITH ALL ELEMENTS W/THAT CLASS

	var newImgs = allImgs.map( // THIS WON'T WORK BECAUSE allImgs is NOT AN ARRAY! just ARRAY-LIKE --> HTML COLLECTION
			function(arrayCell){
				return arrayCell.addEventListener("mouseover, flipOver");
			}
	);
}; 
	//no brackets after function var because it's just a reference, not a call


function flipOver(event){
	
	var memes = document.getElementById("mems");
	if (event.target.src.match("2x2a")){

		event.target.src = "img/trololo.jpg";
		memes.innerHTML = "MEMERY";
		memes.style.color = "red";

	} else {

		event.target.src = "img/2x2a.png";
		memes.innerHTML = "MEMORY";
		memes.style.color = "black";
	}
};


// --in the beginning, all card should be facing down.--
// get all cards (images) in an array via getElementsByClassName
// addEventListener for each cell (listening for clicks)
//
// "isMatch" function referenced in EventListener will check the cell whether there's a pair:
// check whether any of the other cells are NOT face down (loop through allImgs[i].src.match != 2x2a etc). If no, put "uncover another card" in a p.
//   if yes, check whether the cell's img src matches that of any of the other cells (loop through allImgs)
// 
// --> if there's a match, the 2 matching cards should get taken out of the array but also stop them from flipping (HOW? disable js code on these? Exclude)
// document.getElementById("imgXyz").className = "";  <-- no class at all left!