
$(document).ready( function() {

  var hh = $('.slick-slide').find('h2');
  var pp = $('.slick-slide').find('p');
  //TweenMax.from(hh,2,{ opacity:'0' })
  var ii = $('.right-slider-side img')

  $('.slick-dots li').click( function() {
    TweenMax.to(hh, 0.1 ,{ y:'20', opacity:'0' })
    TweenMax.to(hh, 1 ,{ y:'0', opacity:'1' }).delay(0.5)

    TweenMax.to(pp, 0.1 ,{ y:'-20', opacity:'0' })
    TweenMax.to(pp, 1 ,{ y:'0', opacity:'1' }).delay(0.5)

    //TweenMax.to(ii, 0.1 ,{scale:0.3, opacity:'0' })
    // TweenMax.to(ii, 1 ,{ scale:'1', opacity:'1' }).delay(0.5)
  } )



  for(var i=1; i<=8; i++)
	{
		var html = '';
		html += '<div class="b">';
		html += 	'<div class="c"></div>';
		html += '</div>';
		$('.a').append(html);
		
		$('.b:nth-child(' + i + ')').css({
			'-webkit-transform' : 'rotate(' + (i-1)*45 + 'deg)',
				 '-moz-transform' : 'rotate(' + (i-1)*45 + 'deg)',
					'-ms-transform' : 'rotate(' + (i-1)*45 + 'deg)',
					 '-o-transform' : 'rotate(' + (i-1)*45 + 'deg)',
							'transform' : 'rotate(' + (i-1)*45 + 'deg)'
		});
	}
	



  var rotationSnap = 45;
  Draggable.create("#knob", {
      type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
      throwProps:true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
      snap:function(endValue) { 
          //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
          return Math.round(endValue / rotationSnap) * rotationSnap;
      }
  });
  
});


