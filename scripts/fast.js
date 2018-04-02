
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
  
});


