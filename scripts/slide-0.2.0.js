/* slide-0.2.0.js
by Ryan Dantzler
April 10, 2013


New Features =================================================================

 + Responsive design
    - Supports 5 screen width categories (<640, 640-800, 800-1080, 1080-1200, 1300+)
	  & multiple height categories
    - Dynamic slide position adjustments, pre and post load
    - Auto adjusting animations for screen dimensions
	- Dynamic image resizing to fit slide width
 + Content scroll bars
    - Auto vertical scroll bars
    - Scroll bar resets to top when new slide is loaded
	
==============================================================================
*/

$(document).ready(function() {
	var clicked=false;
	var pushY = 0;
	var pushX = 0;
	var height;
	var width;
	var firstAdj = true;
	var selected = 'none';
	var slideY = 0;
	var slideX = 0;
	var topDist = 80;
	
	if (($(window).width()) <= 1300) // if screen size is larger, increase left distance to maintain intitial offscreen position
	{
		$('#sidebar').hide().css('left',($(this).width() + 200)* -1);
	}
	else
	{
		$('#sidebar').hide().css('left',($(window).width()/2)+$(this).width()*-1);
	}
	
	// if window is resized, adjust main slide's vertical position based on responsive design for current screen size
	$(window).resize(function() {
		if (clicked)
		{
			if (($(this).width()) <= 800)
			{
				$('#main').css('top', '175px');
			}
			else if (($(this).width()) <= 1020)
			{
				$('#main').css('top', '138px');
			}
			else
			{
				$('#main').css('top', '80px');
			}
		}
	});
	
	// adjust slide animation positions based on screen size
	function adjustDim() {
		height = $(window).height();
		width = $(window).width();
		
		if (width < 1304) 
		{
			slideX = ($('aside').width() + 200)* -1;
		}
		else
		{
			pushX = ((width-1304)/2)*-1;
			slideX = -600+pushX;
		}
		
		pushY = height-712;
		slideY = 900+pushY;
		
		if (width <= 800) // if window width is less than 800px increase distance from top
		{
			topDist = 175;
		}
		else if (width <= 1020) // if window width is less than 1020px increase distance from top
		{
			topDist = 138;
		}
		else
		{
			topDist = 80;
		}
	}
	
	function getSlide() {
		$('.content').scrollTop(0);  // resets scroll bar to top position
		$('.content').hide();
		adjustDim();
		
		if (clicked) // if a slide has already been loaded, send away current slide before retrieving new slide
		{
			$('#main').stop().animate(
				{
					top:slideY+'px'
				}, 
				1000,
				function() { // first callback function
					$('#main').stop().animate(
						{
							top:topDist+'px'
						}, 
						1000
						); // end animate
				} // end first callback function
			); // end animate
			$('#sidebar').stop().animate(
				{
					left:slideX+'px'
				}, 
				1000,
				function () { // first callback function
					$('#sidebar').delay(500).show().animate(
						{
							left:'20px'
						}, 
						1000,
						function () { // second callback function
						
							$('.content').fadeIn(400,
								function () { // third callback function
									
									$('#copyright').fadeIn(400); // end fadeIn
								} // end third callback function
							); // end fadeIn
						} // end second callback function
					); // end animate
				} // end first callback function
			); // end animate
		}
		else // if no previous slide, retrieve slide
		{
			$('#main').show().animate(
				{
					top:topDist+'px'
				}, 
				1000,
				function () { // first callback function
					$('#sidebar').show().animate(
						{
							left:'20px'
						}, 
						1000, 
						function () { // second callback function
							$('.content').fadeIn(400,
								function () { // third callback function
									$('#copyright').fadeIn(400); // end fadeIn
								} // end third callback function
							); // end fadeIn
						} // end second callback function
					); // end animate
				} // end first callback function
			); // end animate	
		}
	}
	
	function loadSlideInfo(topic, tagline) {
		$('.title').html(tagline);
		if (selected != topic)
		{
			getSlide();
		}
		clicked=true;
		selected=topic;
	}
	
	$('nav a').click(function(evt) {
		evt.preventDefault(); // prevent following nav links for javascript enabled users
	}); // end click
	
	$('#news').click(function() {
		loadSlideInfo('news', 'LATEST NEWS');
	}); // end click
	$('#living').click(function() {
		loadSlideInfo('living', 'LIVING');
	}); // end click
	$('#travel').click(function() {
		loadSlideInfo('travel', 'TRAVEL');
	}); // end click
	$('#products').click(function() {
		loadSlideInfo('products', 'PRODUCTS');
	}); // end click
	$('#companies').click(function() {
		loadSlideInfo('companies', 'COMPANIES');
	}); // end click
}); // end ready