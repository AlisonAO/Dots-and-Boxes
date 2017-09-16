$(function (){

	var currentPlayer = 1
	var player1Score = 0;
	var player2Score = 0;

	var count = 0; 


	function playGame () {
		$('.lines').one('click', function(event) {
				// $(this).html(currentPlayer);
				count++;
				// checkWinner();

			if (currentPlayer === 1) {
				$(this).addClass('player1');
				currentPlayer = 0; 
				
			} else {
				$(this).addClass('player2');
				currentPlayer = 1;
			}
			if ($(this).hasClass(".line-drawn")) {
			$(this).addClass(".line-drawn");
			console.log("working");
		}

		
		});

		$('.match11').on("click",function(){
			$("."+$(this).attr("class").substr(0, $(this).attr("class").length-1)).addClass("topone").siblings()
   		});

		




	};

	playGame();





































});