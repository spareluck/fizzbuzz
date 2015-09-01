
$(document).ready(function() {

	for( i = 1; i <= 100; i++ ) {
		
		if ( i % 3 == 0 && i % 5 == 0 ) {
			$('body ul').append("<li>FizzBuzz</li>");
		}
		else if ( i % 3 == 0 ) {
			$('body ul').append("<li>Fizz</li>");
		}
		else if ( i% 5 == 0 ) {
			$('body ul').append("<li>Buzz</li>");
		}
		else {
			$('body ul').append("<li>" + i + "</li>");
		}
	}
});