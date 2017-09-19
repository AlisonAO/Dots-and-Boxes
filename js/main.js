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

			$this = $(this)
			var label = $this.attr('label');
			if (currentPlayer === 1) {
				$this.addClass('player1 line-drawn');
				checkBox($this);

				if (makeBox(label) == true) {
					currentPlayer = 1;
					player1Score++; 
					$p1score.html(player1Score);
				} else {
					currentPlayer = 0;
					$playerTurn.html('Player 2\'s\ Turn'); 
				}
				
			} else {
				$this.addClass('player2 line-drawn');
				checkBox($this);

				if (makeBox($this) == true) {
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
// 	function makeBox ($line) {

// 		var actions = $line.data('actions').split(' ');
		
// 		for (var i = 0; i < actions.length; i++) {
			
// 			var current = actions[i].split('-');
// 			if ($('#' + current[0]).is('.bordertop.borderbottom.borderleft.borderright') && $('#' + current[1]).is('.bordertop.borderbottom.borderleft.borderright')) {
// 							console.log('it should change');
// 			$('#' + current[0]).removeClass('bordertop');
// 			$('#' + current[1]).removeClass('bordertop');
// 				if (currentPlayer === 1) {
// 					$('#' + current[0]).addClass('player1');
// 					$('#' + current[1]).addClass('player1');
// 				} else {
// 					$('#' + current[0]).addClass('player2');
// 					$('#' + current[1]).addClass('player2');
// 				}

// 			if ($('#' + current[0]).is('.bordertop.borderbottom.borderleft.borderright')) {
// 					console.log('it should change');
// 			$('#' + current[0]).removeClass('bordertop');
// 				if (currentPlayer === 1) {
// 					$('#' + current[0]).addClass('player1');
// 				} else {
// 					$('#' + current[0]).addClass('player2');
// 				}
// 			}
			
// 			return true; 
// 				}	
// 	};
// };


function makeBox (label) {
	str = label.split(" ");
	str[0] = $("#" + str[0]);
	if (str.length == 2) {
		str[1] = $("#" + str[1]);
	}
	
	console.log(str)
		for (var i = 0; i < str.length; i++) {
			if (str[i].is('.bordertop, .borderbottom, .borderleft, .borderright')) {
				// boxes[i].removeClass('bordertop');
				// if (currentPlayer === 1) {
				// // $(boxes).addClass('player1');
				// } else {
				// // boxes[i].addClass('player2');
				// }
				console.log('hi')
			return true; 
			}

	} 
}

	playGame();


	










});