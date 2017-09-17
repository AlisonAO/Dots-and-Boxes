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
				checkBox();
				currentPlayer = 0; 
				
			} else {
				$(this).addClass('player2 line-drawn');
				checkBox();	
				currentPlayer = 1;
				
			};
			
		});
	};


//<---This may need fixing--->
	function checkBox() {
		for (var i = 0; i < maxMoves; i++) {
			if ($('#1of1').hasClass('line-drawn')) {
				console.log('working');
				$('#1of1').removeClass('line-drawn');	
				maxMoves--;
				$('#box1').addClass('bordertop');
			}
		}
	}
	playGame();


	





































});