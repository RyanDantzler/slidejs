/* slide-0.1.2.js
by Ryan Dantzler
March 27, 2013 */

$(document).ready(function() {
	var clicked=false;
	var pushY = 0;
	var pushX = 0;
	var height = $(window).height();
	var width = $(window).width();
	var selected='none';
	
	$('#sidebar').hide();
	
	if (width > 1300) // if window width is greater than 1300px decrease x position of slide to make sure its off screen
	{
		pushX = ((width-1304)/2)*-1;
		$('#sidebar').css({left:-600+pushX+'px'});
	}
	if (height > 720) // if window height is greater than 720px decrease y position of slide to make sure its off screen
	{
		pushY = height-712;
		$('#main').css({top:900+pushY+'px'});
	}
	
	function getSlide() {
		$('.content').hide();
		
		if (clicked) // if a slide has already been loaded, send away current slide before retrieving new slide
		{
			$('#main').stop().animate(
				{
					top:900+pushY+'px'
				}, 
				1000,
				function() { // first callback function
					$('#main').stop().animate(
						{
							top:'80px'
						}, 
						1000
						); // end animate
				} // end first callback function
			); // end animate
			$('#sidebar').stop().animate(
				{
					left:-600+pushX+'px'
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
					top:'80px'
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