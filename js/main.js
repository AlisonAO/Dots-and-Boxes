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
			if ($('#2of1').hasClass('line-drawn')) {
				console.log('working');
				$('#2of1').removeClass('line-drawn');	
				maxMoves--;
				$('#box2').addClass('bordertop');
			}
			if ($('#3of1').hasClass('line-drawn')) {
				console.log('working');
				$('#3of1').removeClass('line-drawn');	
				maxMoves--;
				$('#box3').addClass('bordertop');
			}
			if ($('#4of1').hasClass('line-drawn')) {
				console.log('working');
				$('#4of1').removeClass('line-drawn');	
				maxMoves--;
				$('#box4').addClass('bordertop');
			}
		}
	}
	playGame();


	





































});