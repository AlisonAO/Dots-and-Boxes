$(function (){

	var currentPlayer = 1
	var player1Score = 0;
	var player2Score = 0;
	var count = 0; 
	var maxMoves = 24;


	function playGame() {
		$('.lines').one('click', function(event) {
			
			count++;
		// checkWinner();
		

			if (currentPlayer === 1) {
				$(this).addClass('player1 line-drawn');
				currentPlayer = 0; 
				checkBox();
				
					
			} else {
				$(this).addClass('player2 line-drawn');
				currentPlayer = 1;
				checkBox();
				
			};
			
		});
	};

	// All lines and boxes as variables

	var $line1 = $("#1of0");

	function checkBox() {
		for (var i = 0; i < maxMoves; i++) {
			if ($("#1of0").hasClass('line-drawn')) {
			 console.log('working');
			 $("#1of0").removeClass('line-drawn');	
			 maxMoves--;
			}
		}
	}
	playGame();


	





































});