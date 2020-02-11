$(document).ready(function(){

console.log('we out here');

// Create variables

// array with all the cards the user can select
var allCards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10', 'card11', 'card12'];


// Array with all images
var allImgs = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'];

// randomly select 6 elements
var gameImgs = allImgs.sort(function(){return 0.5 - Math.random()}).slice(0, 6);

// duplicate the 6 elements in the array and shuffle order
gameImgs = $.merge(gameImgs, gameImgs).sort(function(){return 0.5 - Math.random()})

// variables for the user picks (1st pick, 2nd pick), user card selection and selected to check to see if the card has already been selected as a match
var pick1, pick2, c1, C2, selected;

// set the userTurn to 0
var userTurn = 0;

// create an empty array to place the cards that have been matched
var matches = [];


// clicking on an image runs the function
$('.card').on( 'click', function(event){


	// set the selected to the card id
	selected = $(this).attr('id');
	console.log(selected);

	if (matches.includes(selected)){

		// do nothing
		console.log(matches);
	
	} else {

		if (userTurn == 0) {

			c1= $(this).attr('id');
			pick1 = gameImgs[allCards.indexOf(c1)];
			userTurn = 1;
			
			$(this).attr('src', 'images1/' + pick1);

			console.log('card 1: ' + c1);
			console.log('user pick 1: ' + pick1);
			console.log('userTurn: ' + userTurn);

		} else if (userTurn == 1) {

			c2= $(this).attr('id');
			pick2 = gameImgs[allCards.indexOf(c2)];
			userTurn = 2;
			$(this).attr('src', 'images1/' + pick2);

			console.log('card 2: ' + c2);
			console.log('user pick 2: ' + pick2);
			console.log('userTurn: ' + userTurn);
		

			setTimeout(function() { checkPicks(); }, 1000);
			// setTimeout(checkPicks(), 25000);

		};

	
	};

		// console.log(allCards.indexOf($(this).attr('id')));

		// $(this).attr('src', 'images/' + gameImgs[allCards.indexOf($(this).attr('id'))]);

});



function checkPicks(){

	if (pick1 == pick2){
		matches.push(c1);
		matches.push(c2);
		userTurn = 0;
		console.log('match for :' + pick1)
		console.log(matches)
	} else {
		$(('#'+c1)).attr('src', 'images1/card-back.png');
		$(('#'+c2)).attr('src', 'images1/card-back.png');
		userTurn = 0;
		console.log('not a match')
	}


}



});