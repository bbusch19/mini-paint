$(document).ready(function(){

var box = $('.box');

box.on('click', function() {
	box.on('mouseenter', function() {
		$(this).addClass(color);
	})
})

box.on('dblclick', function() {
	box.on('mouseleave', function() {
		$(this).removeClass(colors);
	})
})



$('#reset').on('click', function() {
	$('.box').removeClass(colors);
})

var colors = 'white green red blue yellow'
var color = 'white';

//The following creates a click event of each color button
$('#red').on('click', function() {
	color = 'red';
})

$('#green').on('click', function() {
	color = 'green';
})

$('#blue').on('click', function() {
	color = 'blue';
})

$('#yellow').on('click', function() {
	color = 'yellow';
})

$('#white').on('click', function() {
	color = 'white';
})

})
