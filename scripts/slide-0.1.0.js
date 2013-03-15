/* slide.js
by Ryan Dantzler
January 21, 2013 */

$(document).ready(function() {
	var clicked=false;
	var selected='none';
	var pushY = 0;
	var pushX = 0;
	var width = $(window).width();
	var height = $(window).height();
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
	//$('#news').html(((width-1304)/2)*-1);
	//$('#living').html(width);
	//$('#travel').html(height-712);	
	//$('#products').html(height);
	$('#news').click(function() {
		$('.title').html('LATEST NEWS');
		if (selected != 'news') // prevents animation if slide is already on current selection
		{
			if (clicked) // if a slide has already been loaded, remove retrieving new slide
			{
				$('#main').animate(
				{top:900+pushY+'px'}, 1000);
				$('#sidebar').delay(500).animate(
				{left:-600+pushX+'px'}, 1000);
				$('#main').delay(300).animate(
				{top:'80px'}, 1000);
				$('#sidebar').delay(300).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2800).fadeIn(400);
			}
			else // if no previous slide, retrieve slide
			{
				$('#main').show().animate(
				{top:'80px'}, 1000);
				$('#sidebar').show().delay(1000).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2000).fadeIn(400);
				$('#copyright').delay(2000).fadeIn(400);
			}
		}
		clicked=true;
		selected='news';
	});
	$('#living').click(function() {
		$('.title').html('LIVING');
		if (selected != 'living') // prevents animation if slide is already on current selection
		{
			if (clicked) // if a slide has already been loaded, remove retrieving new slide
			{
				$('#main').animate(
				{top:900+pushY+'px'}, 1000);
				$('#sidebar').delay(500).animate(
				{left:-600+pushX+'px'}, 1000);
				$('#main').delay(300).animate(
				{top:'80px'}, 1000);
				$('#sidebar').delay(300).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2800).fadeIn(400);
			}
			else // if no previous slide, retrieve slide
			{
				$('#main').show().animate(
				{top:'80px'}, 1000);
				$('#sidebar').show().delay(1000).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2000).fadeIn(400);
				$('#copyright').delay(2000).fadeIn(400);
			}
		}
		clicked=true;
		selected='living';
	});
	$('#travel').click(function() {
		$('.title').html('TRAVEL');
		if (selected != 'travel') // prevents animation if slide is already on current selection
		{
		//width = $(window).width();
		//pushX = ((width-1304)/2)*-1;
			if (clicked) // if a slide has already been loaded, remove retrieving new slide
			{
				$('#main').animate(
				{top:900+pushY+'px'}, 1000);
				$('#sidebar').delay(500).animate(
				{left:-600+pushX+'px'}, 1000);
				$('#main').delay(300).animate(
				{top:'80px'}, 1000);
				$('#sidebar').delay(300).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2800).fadeIn(400);
			}
			else // if no previous slide, retrieve slide
			{
				$('#main').show().animate(
				{top:'80px'}, 1000);
				$('#sidebar').show().delay(1000).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2000).fadeIn(400);
				$('#copyright').delay(2000).fadeIn(400);
			}
		}
		clicked=true;
		selected='travel';
	});
	$('#products').click(function() {
		$('.title').html('PRODUCTS');
		if (selected != 'products') // prevents animation if slide is already on current selection
		{
			if (clicked) // if a slide has already been loaded, remove retrieving new slide
			{
				$('#main').animate(
				{top:900+pushY+'px'}, 1000);
				$('#sidebar').delay(500).animate(
				{left:-600+pushX+'px'}, 1000);
				$('#main').delay(300).animate(
				{top:'80px'}, 1000);
				$('#sidebar').delay(300).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2800).fadeIn(400);
			}
			else // if no previous slide, retrieve slide
			{
				$('#main').show().animate(
				{top:'80px'}, 1000);
				$('#sidebar').show().delay(1000).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2000).fadeIn(400);
				$('#copyright').delay(2000).fadeIn(400);
			}
		}
		clicked=true;
		selected='products';
	});
	$('#companies').click(function() {
		$('.title').html('COMPANIES');
		if (selected != 'companies') // prevents animation if slide is already on current selection
		{
			if (clicked) // if a slide has already been loaded, remove retrieving new slide
			{
				$('#main').animate(
				{top:900+pushY+'px'}, 1000);
				$('#sidebar').delay(500).animate(
				{left:-600+pushX+'px'}, 1000);
				$('#main').delay(300).animate(
				{top:'80px'}, 1000);
				$('#sidebar').delay(300).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2800).fadeIn(400);
			}
			else // if no previous slide, retrieve slide
			{
				$('#main').show().animate(
				{top:'80px'}, 1000);
				$('#sidebar').show().delay(1000).animate(
				{left:'20px'}, 1000);
				$('.content').hide().delay(2000).fadeIn(400);
				$('#copyright').delay(2000).fadeIn(400);
			}
		}
		clicked=true;
		selected='companies';
	});
});