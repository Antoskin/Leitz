$(document).ready( function() {

	$('.tooltipped').tooltip();
	
	$('.steps').click(function(){$('body, html').animate({scrollTop:$('.service-steps').offset().top},777)})

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
    


	let but = $('.team-button');

	but.click( function(e) {
		e.preventDefault();
		e.stopPropagation();
		let curBut = $(this);
		let curTeam = curBut.parents('.item-team');
		TweenMax.to(curTeam, 0.5, { opacity:0 })
		TweenMax.to('.item-team', 0.5, { opacity:0 }).delay(0.3);
		
		TweenMax.fromTo('#team-slider',1,{y: -20}, {opacity:1, y:0,zIndex:100}).delay(1.5);
		if( curBut.hasClass('tima2') ) {
			// $('#team-slider .slick-dots li:eq(1)').click();
		} else if(curBut.hasClass('tima3')) {
			$('#team-slider .slick-dots li:eq(2)').click();
		} else if(curBut.hasClass('tima4')) {
			$('#team-slider .slick-dots li:eq(3)').click();
		}
		// console.log('ad')
	})


	$('.losso, .b').delegate(``, 'mouseover', 'mouseout', function(e) {
		if(e.type == `mouseover`) {
			// console.log('!');
			let the_text = $('#knob .active .hidden-comment').text();
			console.log(the_text);
			$('.revo-section-width p').text(the_text);
		}
	})
	//slick-track

	//slick-slide slick-current slick-active
    

})