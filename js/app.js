
$(document).ready(function() {

	for( var i = 1; i <= 100; i++ ) {
		
		var msg =  (i % 3 === 0 ? 
						 (i % 5 === 0 ? 'FizzBuzz' : 'Fizz')
					: (i % 5 === 0 ? 'Buzz' : i));

		$('ul').append("<li>" + msg + "</li>");
	}
});