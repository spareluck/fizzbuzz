
$(document).ready(function() {

	function fizzBuzzer(max) {

		for( var i = 1; i <= max; i++ ) {
				
			var msg =  (i % 3 === 0 ? 
							 (i % 5 === 0 ? 'FizzBuzz' : 'Fizz')
						: (i % 5 === 0 ? 'Buzz' : i));

			$('ul').append("<li>" + msg + "</li>");
		}
	}

	function askNumber() {
		return parseInt(prompt("Please enter a maximum number"));
	}
	
	function check() {
		var	max = askNumber();
	
		while (isNaN(max)) {
			alert("Please enter a number");
			max = askNumber();
		} 
		return fizzBuzzer(max);
	}
	check();
});