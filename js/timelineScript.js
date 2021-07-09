$(function() {})

// create element
var $element=$('.block-exp, .block-edu');

	// window variable
	var $window = $(window);
	
	// call function on scroll resize
	$window.on('scroll resize', fade);
	
	
	// trigger scroll event
	$(window).trigger('scroll');
	
	// function check fade
	function fade() {
		
		// get height
		var height = $window.height();
		
		// stuff
		$.each($element, function(event) {
			
			// create target element
			var $element = $(this);
			
			// get block height and offset
			var block = $element.outerHeight();
			var offset = $element.offset().top;
			
			// detect space available
			var space = (height - (block + offset - $(window).scrollTop()))/(-2);
			
			// if statement controlling focus
			if((space/10) > 1) {
				$element.addClass("non-focus");
			}
			else {
				$element.removeClass("non-focus");
			}
		});
	
	};