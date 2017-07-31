	$( document ).ready(function(){
	var Random = Math.floor(Math.random()*100+20)
	$('#randomNumber').text(Random);
	var num1= Math.floor(Math.random()*13+1)
	var num2= Math.floor(Math.random()*13+1)
	var num3= Math.floor(Math.random()*13+1)
	var num4= Math.floor(Math.random()*13+1)

	var userTotal = 0;
	var wins = 0;
	var losses = 0;

	$('#numberWins').text(wins);
	$('#numberLosses').text(losses);

	function reset(){
		Random=Math.floor(Math.random()*100+20);
		console.log(Random)
		$('#randomNumber').text(Random);
	num1= Math.floor(Math.random()*13+1);
	num2= Math.floor(Math.random()*13+1);
	num3= Math.floor(Math.random()*13+1);
	num4= Math.floor(Math.random()*13+1);
	userTotal = 0;
	$('finalTotal').text(userTotal);
	}

	function win(){
		alert("Winner!!");
		wins++;
		$('#numberWins').text(wins);
		reset();
	}

	function lose(){
		alert("Sorry you lost");
		losses++;
		$('#numberLosses').text(losses);
		reset();

	}

	$('#one').on ('click', function(){
		userTotal = userTotal + num1;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal);

		if (userTotal == Random) {
			win();
		} 
		else if (userTotal > Random){
			lose();
		}
	})

	$('#two').on ('click', function(){
		userTotal = userTotal + num2;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal);

		if (userTotal == Random) {
			win();
		} 
		else if (userTotal > Random){
			lose();
		}
	})

	$('#three').on ('click', function(){
		userTotal = userTotal + num3;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal);

		if (userTotal == Random) {
			win();
		} 
		else if (userTotal > Random){
			lose();
		}
	})

	$('#four').on ('click', function(){
		userTotal = userTotal + num4;
		console.log("New userTotal= " + userTotal);
		$('#finalTotal').text(userTotal);

		if (userTotal == Random) {
			win();
		} 
		else if (userTotal > Random){
			lose();
		}
	});

});