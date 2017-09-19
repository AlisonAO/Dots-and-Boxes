$(function (){

	var currentPlayer = 1
	var player1Score = 0;
	var player2Score = 0;
	var count = 0; 
	var $p1score = $('#player1-score');
	var $p2score = $('#player2-score');
	var $playerTurn = $('#playersturn');

	var $instructions = $('#instructions')

	$('#button').one('click', function(event){
		$instructions.slideUp(600);
	});

	function playGame() {
		$('.lines').one('click', function(event) {
			count++;
			
			if (currentPlayer === 1) {
				$(this).addClass('player1 line-drawn');
				checkBox($(this));

				if (makeBox($(this)) == true) {
					currentPlayer = 1;
					player1Score++; 
					$p1score.html(player1Score);
				} else {
					currentPlayer = 0;
					$playerTurn.html('Player 2\'s\ Turn'); 
				}
				
			} else {
				$(this).addClass('player2 line-drawn');
				checkBox($(this));

				if (makeBox($(this)) == true) {
					currentPlayer = 0;
					player2Score++; 
					$p2score.html(player2Score);
				} else {
					currentPlayer = 1;
					$playerTurn.html('Player 1\'s Turn'); 
				}
				
				
			};
			
		});
	};

//<---This function adds different border properties if a line has been clicked--->
	function checkBox($line) {

		var actions = $line.data('actions').split(' ');
		
		if ($line.hasClass('line-drawn')) {

			$line.removeClass('line-drawn');

			for (var i = 0; i < actions.length; i++) {
				
				var current = actions[i].split('-');

				$('#' + current[0]).addClass(current[1]);
			}

		}
	};
//<---This function checks if a box has all the border properties. If it does, then it will fill in the box with the approriate player color-->
	function makeBox ($line) {

		var actions = $line.data('actions').split(' ');
		
		for (var i = 0; i < actions.length; i++) {
			
			var current = actions[i].split('-');
			var $thisBox = $('#' + current[0])

			if ($thisBox.is('.bordertop.borderbottom.borderleft.borderright')) {
					console.log('it should change');
			$thisBox.removeClass('bordertop');
			if (currentPlayer === 1) {
				$thisBox.addClass('player1');
			} else {
				$thisBox.addClass('player2');
			}
			
			return true; 
				}	
	};
};

	playGame();


	










});