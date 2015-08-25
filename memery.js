
window.onload = function(){
	
	allImgs().map(function(arrayCell){
		arrayCell.addEventListener("click", matchMaking); //no brackets after function var because it's just a reference, not a call
		}
	);
}; 


function allImgs(){
	var allImgs = document.getElementsByClassName("pft"); // THIS RETURNS A HTML COLLECTION WITH ALL ELEMENTS W/THAT CLASS
	return [].slice.call(allImgs); //call(allImgs) makes call function think it's being called from allImgs instead of the array.
}//I need the [array] to add the EventListener via .map(). Might be faster to just loop thru HTML collection in window.onload to addEventListener.

var imgArray = function(){
	return [3,1,6,4,2,3,5,2,4,5,6,1] //Set order for now; there are 12 cards, so 6 image pairs.
}; 

var activatedCards = []; //is there a way to initialise this non-globally? Would I have to put it in another function?
var countedPairs = 0;

var activate = function(turnedId,turnedSrc){ //can't just hand over event.target and then ask for id & src within function because the scope has changed
	activatedCards.push({position: turnedId, pic: turnedSrc}); 
	return activatedCards;//all elements that have been clicked (max. 2) as objects in a array
};

var pairCounter = function(){
	if (countedPairs == 5){
		document.getElementById("lilhelp").innerHTML ="YOU MADE IT YAAAAAY&emsp;<button id=\"newgame\">New game</button>";
		document.getElementById("newgame").onclick = function(){window.location.reload()};
	};
	return countedPairs++;
};

function matchMaking(event){  //EVERY TIME A CARD GETS CLICKED, ALL OF THIS HAPPENS
//"event" hands over the mouseevent; event.target is the element that triggered the event.

	if (event.target.src.match("back")){

		event.target.src = "img/img"+imgArray()[event.target.id-1]+".png"// CARD FLIPS (change to img url grabbed from array above, ideally random assignment)
		
		activate(event.target.id, event.target.src); //puts element as object into activeCards

		//now check whether this open card matches another one by checking the length of the "active cards" array.
		//if the length is 2, check both objects' "picture" properties in the "active cards" array.
		if (activatedCards.length == 2){ //2 cards have been uncovered!

			if (activatedCards[activatedCards.length-1].pic === activatedCards[activatedCards.length-2].pic){ //if they match

				document.getElementById("lilhelp").innerHTML = "YOU FOUND A PAIR OMG";
				pairCounter(); //counting up number of pairs
				activatedCards = []

			} else { // put all of the else content in a function and setTimeOut ??
				document.getElementById("lilhelp").innerHTML = "Nooope."; //if they don't match
				
				// get the position value from each object in the array
				// then change the dom elements' src with this id
				setTimeout(function(){

				activatedCards[0];
				activatedCards[1];

				document.getElementById(activatedCards[0].position).src = "img/back.png";
				document.getElementById(activatedCards[1].position).src = "img/back.png";
				document.getElementById("lilhelp").innerHTML = "Try again, bruh";
				activatedCards = []

			},700)
			}
		} else if (activatedCards.length == 1){
			document.getElementById("lilhelp").innerHTML = "Uncover another card."
		} else {
			console.log("this shouldn't ever be the case (nothing in object array after an item has been clicked)");
		}

	} else {

		document.getElementById("lilhelp").innerHTML ="This card is already turned over, what are you playing at"

	}
	
	return activatedCards;
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