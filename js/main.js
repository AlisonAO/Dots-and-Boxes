$(function (){

	var currentPlayer = 1
	var player1Score = 0;
	var player2Score = 0;
	var count = 0; 
	var maxMoves = 50;
	var maxMoves2 = 24;

	function playGame() {
		$('.lines').one('click', function(event) {
			count++;
			
		// checkWinner();
			if (currentPlayer === 1) {
				$(this).addClass('player1 line-drawn');
				checkBox();
				// makeBox();
				if (makeBox() == true) {
					currentPlayer = 1; 
				} else {
					currentPlayer = 0; 
				}
				
				
			} else {
				$(this).addClass('player2 line-drawn');
				// makeBox();
				checkBox();
				// makeBox();
				if (makeBox() == true) {
					currentPlayer = 0; 
				} else {
					currentPlayer = 1; 
				}
				// makeBox();
				
				
			};
			
		});
	};

//<---This function adds different border properties if a line has been clicked--->
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
			if ($('#1of2').hasClass('line-drawn')) {
				console.log('working');
				$('#1of2').removeClass('line-drawn');	
				maxMoves--;
				$('#box1').addClass('borderleft');
			}
			if ($('#2of2').hasClass('line-drawn')) {
				console.log('working');
				$('#2of2').removeClass('line-drawn');	
				maxMoves--;
				$('#box2').addClass('borderleft');
				$('#box1').addClass('borderright');
			}
			if ($('#3of2').hasClass('line-drawn')) {
				console.log('working');
				$('#3of2').removeClass('line-drawn');	
				maxMoves--;
				$('#box3').addClass('borderleft');
				$('#box2').addClass('borderright');
			}
			if ($('#4of2').hasClass('line-drawn')) {
				console.log('working');
				$('#4of2').removeClass('line-drawn');	
				maxMoves--;
				$('#box4').addClass('borderleft');
				$('#box3').addClass('borderright');
			}
			if ($('#5of2').hasClass('line-drawn')) {
				console.log('working');
				$('#5of2').removeClass('line-drawn');	
				maxMoves--;
				$('#box4').addClass('borderright');
			}
			if ($('#1of3').hasClass('line-drawn')) {
				$('#1of3').removeClass('line-drawn');	
				maxMoves--;
				$('#box1').addClass('borderbottom');
				$('#box5').addClass('bordertop');
			}
			if ($('#2of3').hasClass('line-drawn')) {
				$('#2of3').removeClass('line-drawn');	
				maxMoves--;
				$('#box2').addClass('borderbottom');
				$('#box6').addClass('bordertop');
			}
			if ($('#3of3').hasClass('line-drawn')) {
				$('#3of3').removeClass('line-drawn');	
				maxMoves--;
				$('#box3').addClass('borderbottom');
				$('#box7').addClass('bordertop');
			}
			if ($('#4of3').hasClass('line-drawn')) {
				$('#4of3').removeClass('line-drawn');	
				maxMoves--;
				$('#box4').addClass('borderbottom');
				$('#box8').addClass('bordertop');
			}
			if ($('#1of4').hasClass('line-drawn')) {
				$('#1of4').removeClass('line-drawn');	
				maxMoves--;
				$('#box5').addClass('borderleft');
			}
			if ($('#2of4').hasClass('line-drawn')) {
				$('#2of4').removeClass('line-drawn');	
				maxMoves--;
				$('#box6').addClass('borderleft');
				$('#box5').addClass('borderright');
			}
			if ($('#3of4').hasClass('line-drawn')) {
				$('#3of4').removeClass('line-drawn');	
				maxMoves--;
				$('#box7').addClass('borderleft');
				$('#box6').addClass('borderright');
			}
			if ($('#4of4').hasClass('line-drawn')) {
				$('#4of4').removeClass('line-drawn');	
				maxMoves--;
				$('#box8').addClass('borderleft');
				$('#box7').addClass('borderright');
			}
			if ($('#5of4').hasClass('line-drawn')) {
				$('#5of4').removeClass('line-drawn');	
				maxMoves--;
				$('#box8').addClass('borderright');
			}
			if ($('#1of5').hasClass('line-drawn')) {
				$('#1of5').removeClass('line-drawn');	
				maxMoves--;
				$('#box5').addClass('borderbottom');
				$('#box9').addClass('bordertop');
			}
			if ($('#2of5').hasClass('line-drawn')) {
				$('#2of5').removeClass('line-drawn');	
				maxMoves--;
				$('#box6').addClass('borderbottom');
				$('#box10').addClass('bordertop');
			}
			if ($('#3of5').hasClass('line-drawn')) {
				$('#3of5').removeClass('line-drawn');	
				maxMoves--;
				$('#box7').addClass('borderbottom');
				$('#box11').addClass('bordertop');
			}
			if ($('#4of5').hasClass('line-drawn')) {
				$('#4of5').removeClass('line-drawn');	
				maxMoves--;
				$('#box8').addClass('borderbottom');
				$('#box12').addClass('bordertop');
			}
			if ($('#1of6').hasClass('line-drawn')) {
				$('#1of6').removeClass('line-drawn');	
				maxMoves--;
				$('#box9').addClass('borderleft');
			}
			if ($('#2of6').hasClass('line-drawn')) {
				$('#2of6').removeClass('line-drawn');	
				maxMoves--;
				$('#box10').addClass('borderleft');
				$('#box9').addClass('borderright');
			}
			if ($('#3of6').hasClass('line-drawn')) {
				$('#3of6').removeClass('line-drawn');	
				maxMoves--;
				$('#box11').addClass('borderleft');
				$('#box10').addClass('borderright');
			}
			if ($('#4of6').hasClass('line-drawn')) {
				$('#4of6').removeClass('line-drawn');	
				maxMoves--;
				$('#box12').addClass('borderleft');
				$('#box11').addClass('borderright');
			}
			if ($('#5of6').hasClass('line-drawn')) {
				$('#5of6').removeClass('line-drawn');	
				maxMoves--;
				$('#box12').addClass('borderright');
			}
			if ($('#1of7').hasClass('line-drawn')) {
				$('#1of7').removeClass('line-drawn');	
				maxMoves--;
				$('#box13').addClass('bordertop');
				$('#box9').addClass('borderbottom');
			}
			if ($('#2of7').hasClass('line-drawn')) {
				$('#2of7').removeClass('line-drawn');	
				maxMoves--;
				$('#box14').addClass('bordertop');
				$('#box10').addClass('borderbottom');
			}
			if ($('#3of7').hasClass('line-drawn')) {
				$('#3of7').removeClass('line-drawn');	
				maxMoves--;
				$('#box15').addClass('bordertop');
				$('#box11').addClass('borderbottom');
			}
			if ($('#4of7').hasClass('line-drawn')) {
				$('#4of7').removeClass('line-drawn');	
				maxMoves--;
				$('#box16').addClass('bordertop');
				$('#box12').addClass('borderbottom');
			}
			if ($('#1of8').hasClass('line-drawn')) {
				$('#1of8').removeClass('line-drawn');	
				maxMoves--;
				$('#box13').addClass('borderleft');
			}
			if ($('#2of8').hasClass('line-drawn')) {
				$('#2of8').removeClass('line-drawn');	
				maxMoves--;
				$('#box14').addClass('borderleft');
				$('#box13').addClass('borderright');
			}
			if ($('#3of8').hasClass('line-drawn')) {
				$('#3of8').removeClass('line-drawn');	
				maxMoves--;
				$('#box15').addClass('borderleft');
				$('#box14').addClass('borderright');
			}
			if ($('#4of8').hasClass('line-drawn')) {
				$('#4of8').removeClass('line-drawn');	
				maxMoves--;
				$('#box16').addClass('borderleft');
				$('#box15').addClass('borderright');
			}
			if ($('#5of8').hasClass('line-drawn')) {
				$('#5of8').removeClass('line-drawn');	
				maxMoves--;
				$('#box17').addClass('borderleft');
				$('#box16').addClass('borderright');
			}
			if ($('#1of9').hasClass('line-drawn')) {
				console.log('working');
				$('#1of9').removeClass('line-drawn');	
				maxMoves--;
				$('#box13').addClass('borderbottom');
			}
			if ($('#2of9').hasClass('line-drawn')) {
				console.log('working');
				$('#2of9').removeClass('line-drawn');	
				maxMoves--;
				$('#box14').addClass('borderbottom');
			}
			if ($('#3of9').hasClass('line-drawn')) {
				console.log('working');
				$('#3of9').removeClass('line-drawn');	
				maxMoves--;
				$('#box15').addClass('borderbottom');
			}
			if ($('#4of9').hasClass('line-drawn')) {
				console.log('working');
				$('#4of9').removeClass('line-drawn');	
				maxMoves--;
				$('#box16').addClass('borderbottom');
			};								
		};
	};

	function makeBox() {
		for (var i = 0; i < maxMoves2; i++) {
			if ($('#box1').hasClass('borderbottom') && $('#box1').hasClass('borderleft') && $('#box1').hasClass('borderright')
				&& $('#box1').hasClass('bordertop') && currentPlayer == 1) {
				console.log('it should change');
				$('#box1').removeClass('bordertop');
				maxMoves2--;
				$('#box1').addClass('box-complete1');
				return true; 
	
			};
			if ($('#box1').hasClass('borderbottom') && $('#box1').hasClass('borderleft') && $('#box1').hasClass('borderright')
				&& $('#box1').hasClass('bordertop') && currentPlayer == 0) {
				$('#box1').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box1').addClass('box-complete2'); 
				return true;
			};
			if ($('#box2').hasClass('borderbottom') && $('#box2').hasClass('borderleft') && $('#box2').hasClass('borderright')
				&& $('#box2').hasClass('bordertop') && currentPlayer == 1) {
				$('#box2').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box2').addClass('box-complete1'); 
				return true;
			};
			if ($('#box2').hasClass('borderbottom') && $('#box2').hasClass('borderleft') && $('#box2').hasClass('borderright')
				&& $('#box2').hasClass('bordertop') && currentPlayer == 0) {
				$('#box2').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box2').addClass('box-complete2'); 
				return;
			};
			if ($('#box3').hasClass('borderbottom') && $('#box3').hasClass('borderleft') && $('#box3').hasClass('borderright')
				&& $('#box3').hasClass('bordertop') && currentPlayer == 1) {
				$('#box3').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box3').addClass('box-complete1'); 
			};
			if ($('#box3').hasClass('borderbottom') && $('#box3').hasClass('borderleft') && $('#box3').hasClass('borderright')
				&& $('#box3').hasClass('bordertop') && currentPlayer == 0) {
				$('#box3').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box3').addClass('box-complete2'); 
			};
			if ($('#box4').hasClass('borderbottom') && $('#box4').hasClass('borderleft') && $('#box4').hasClass('borderright')
				&& $('#box4').hasClass('bordertop') && currentPlayer == 1) {
				$('#box4').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box4').addClass('box-complete1'); 
			};
			if ($('#box4').hasClass('borderbottom') && $('#box4').hasClass('borderleft') && $('#box4').hasClass('borderright')
				&& $('#box4').hasClass('bordertop') && currentPlayer == 0) {
				$('#box4').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box4').addClass('box-complete2'); 
			};
			if ($('#box5').hasClass('borderbottom') && $('#box5').hasClass('borderleft') && $('#box5').hasClass('borderright')
				&& $('#box5').hasClass('bordertop') && currentPlayer == 1) {
				$('#box5').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box5').addClass('box-complete1'); 
			};
			if ($('#box5').hasClass('borderbottom') && $('#box5').hasClass('borderleft') && $('#box5').hasClass('borderright')
				&& $('#box5').hasClass('bordertop') && currentPlayer == 0) {
				$('#box5').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box5').addClass('box-complete2'); 
			};
			if ($('#box6').hasClass('borderbottom') && $('#box6').hasClass('borderleft') && $('#box6').hasClass('borderright')
				&& $('#box6').hasClass('bordertop') && currentPlayer == 1) {
				$('#box6').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box6').addClass('box-complete1'); 
			};
			if ($('#box6').hasClass('borderbottom') && $('#box6').hasClass('borderleft') && $('#box6').hasClass('borderright')
				&& $('#box6').hasClass('bordertop') && currentPlayer == 0) {
				$('#box6').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box6').addClass('box-complete2'); 
			};
			if ($('#box7').hasClass('borderbottom') && $('#box7').hasClass('borderleft') && $('#box7').hasClass('borderright')
				&& $('#box7').hasClass('bordertop') && currentPlayer == 1) {
				$('#box7').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box7').addClass('box-complete1'); 
			};
			if ($('#box7').hasClass('borderbottom') && $('#box7').hasClass('borderleft') && $('#box7').hasClass('borderright')
				&& $('#box7').hasClass('bordertop') && currentPlayer == 0) {
				$('#box7').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box7').addClass('box-complete2'); 
			};
			if ($('#box8').hasClass('borderbottom') && $('#box6').hasClass('borderleft') && $('#box6').hasClass('borderright')
				&& $('#box8').hasClass('bordertop') && currentPlayer == 1) {
				$('#box8').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box8').addClass('box-complete1'); 
			};
			if ($('#box8').hasClass('borderbottom') && $('#box8').hasClass('borderleft') && $('#box8').hasClass('borderright')
				&& $('#box8').hasClass('bordertop') && currentPlayer == 0) {
				$('#box8').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box8').addClass('box-complete2'); 
			};
			if ($('#box9').hasClass('borderbottom') && $('#box9').hasClass('borderleft') && $('#box9').hasClass('borderright')
				&& $('#box9').hasClass('bordertop') && currentPlayer == 1) {
				$('#box9').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box9').addClass('box-complete1'); 
			};
			if ($('#box9').hasClass('borderbottom') && $('#box9').hasClass('borderleft') && $('#box9').hasClass('borderright')
				&& $('#box9').hasClass('bordertop') && currentPlayer == 0) {
				$('#box9').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box9').addClass('box-complete2'); 
			};
			if ($('#box10').hasClass('borderbottom') && $('#box10').hasClass('borderleft') && $('#box10').hasClass('borderright')
				&& $('#box10').hasClass('bordertop') && currentPlayer == 1) {
				$('#box10').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box10').addClass('box-complete1'); 
			};
			if ($('#box10').hasClass('borderbottom') && $('#box10').hasClass('borderleft') && $('#box10').hasClass('borderright')
				&& $('#box10').hasClass('bordertop') && currentPlayer == 0) {
				$('#box10').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box10').addClass('box-complete2'); 
			};
			if ($('#box11').hasClass('borderbottom') && $('#box11').hasClass('borderleft') && $('#box11').hasClass('borderright')
				&& $('#box11').hasClass('bordertop') && currentPlayer == 1) {
				$('#box11').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box11').addClass('box-complete1'); 
			};
			if ($('#box11').hasClass('borderbottom') && $('#box11').hasClass('borderleft') && $('#box11').hasClass('borderright')
				&& $('#box11').hasClass('bordertop') && currentPlayer == 0) {
				$('#box11').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box11').addClass('box-complete2'); 
			};
			if ($('#box12').hasClass('borderbottom') && $('#box12').hasClass('borderleft') && $('#box12').hasClass('borderright')
				&& $('#box12').hasClass('bordertop') && currentPlayer == 1) {
				$('#box12').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box12').addClass('box-complete1'); 
			};
			if ($('#box12').hasClass('borderbottom') && $('#box12').hasClass('borderleft') && $('#box12').hasClass('borderright')
				&& $('#box12').hasClass('bordertop') && currentPlayer == 0) {
				$('#box12').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box12').addClass('box-complete2'); 
			};
			if ($('#box13').hasClass('borderbottom') && $('#box13').hasClass('borderleft') && $('#box13').hasClass('borderright')
				&& $('#box13').hasClass('bordertop') && currentPlayer == 1) {
				$('#box13').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box13').addClass('box-complete1'); 
			};
			if ($('#box13').hasClass('borderbottom') && $('#box13').hasClass('borderleft') && $('#box13').hasClass('borderright')
				&& $('#box13').hasClass('bordertop') && currentPlayer == 0) {
				$('#box13').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box13').addClass('box-complete2'); 
			};
			if ($('#box14').hasClass('borderbottom') && $('#box14').hasClass('borderleft') && $('#box14').hasClass('borderright')
				&& $('#box14').hasClass('bordertop') && currentPlayer == 1) {
				$('#box14').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box14').addClass('box-complete1'); 
			};
			if ($('#box14').hasClass('borderbottom') && $('#box14').hasClass('borderleft') && $('#box14').hasClass('borderright')
				&& $('#box14').hasClass('bordertop') && currentPlayer == 0) {
				$('#box14').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box14').addClass('box-complete2'); 
			};
			if ($('#box15').hasClass('borderbottom') && $('#box15').hasClass('borderleft') && $('#box15').hasClass('borderright')
				&& $('#box14').hasClass('bordertop') && currentPlayer == 1) {
				$('#box15').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box15').addClass('box-complete1'); 
			};
			if ($('#box15').hasClass('borderbottom') && $('#box15').hasClass('borderleft') && $('#box15').hasClass('borderright')
				&& $('#box15').hasClass('bordertop') && currentPlayer == 0) {
				$('#box15').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box15').addClass('box-complete2'); 
			};
			if ($('#box16').hasClass('borderbottom') && $('#box16').hasClass('borderleft') && $('#box16').hasClass('borderright')
				&& $('#box16').hasClass('bordertop') && currentPlayer == 1) {
				$('#box16').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box16').addClass('box-complete1'); 
			};
			if ($('#box16').hasClass('borderbottom') && $('#box16').hasClass('borderleft') && $('#box16').hasClass('borderright')
				&& $('#box16').hasClass('bordertop') && currentPlayer == 0) {
				$('#box16').removeClass('bordertop');
				console.log('it should change');
				maxMoves2--;
				$('#box16').addClass('box-complete2'); 
			};
		};
	};


	playGame();


	










});