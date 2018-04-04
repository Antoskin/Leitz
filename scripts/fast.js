$(document).ready( function() {

  // for(var i=1; i<=8; i++)
	// {
	// 	var html = '';
	// 	html += '<div class="b">';
	// 	html += 	'<div class="c"></div>';
	// 	html += '</div>';
	// 	$('.a').append(html);
		
	// 	$('.b:nth-child(' + i + ')').css({
	// 		'-webkit-transform' : 'rotate(' + (i-1)*45 + 'deg)',
	// 			 '-moz-transform' : 'rotate(' + (i-1)*45 + 'deg)',
	// 				'-ms-transform' : 'rotate(' + (i-1)*45 + 'deg)',
	// 				 '-o-transform' : 'rotate(' + (i-1)*45 + 'deg)',
	// 						'transform' : 'rotate(' + (i-1)*45 + 'deg)'
	// 	});
	// }

	TweenMax.to('.sibl-step',1.5, { opacity:1 });




	let tm6 = new TimelineLite();
    tm6.staggerTo('.sibl-step',1, { scale:1,borderColor:'#007cbf',borderWidth:'3px'},0.2).delay(2);
    tm6.staggerFromTo('.sibl-step p', .5, {y:-20}, { y:0, opacity:1, scale:1 }, .2)


     let tm7 = new TimelineLite();
     tm7.staggerFromTo('.blue-owl', .5, {y:20}, { y:0, opacity:1 }, .2).delay(4);
     tm7.from('.image-target', 2, {opacity:0, y: -40 }).delay(4);
     tm7.from('.steps-wrapper svg path', 2, { drawSVG:'0%' });



})

