$(document).ready( function() {

	TweenMax.to('.sibl-step',1.5, { opacity:1 });


// area-for-header-svg the-content-description contact-phones
	


$('.presentation').click( function() {
	setTimeout( () => {
		TweenMax.to('#area-for-header-svg', .5, { opacity: 0 }  )
		TweenMax.to('.the-content-description', .5, { opacity: 0 }  )
		TweenMax.to('.the-content-description', .5, { display: 'none' }  ).delay(0.5)
		TweenMax.to('.contact-phones', .5, { opacity: 0 }  )
	},1000 )
	TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'#000' }  ).delay(2);
	TweenMax.to('.the_content-presentation', .5, { display:'block', opacity:1 }  ).delay(2);
	TweenMax.to('.contact-phones', .5, { opacity: 1 }  ).delay(2);
	TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'rgba(0, 0, 0, 0.3)' }  ).delay(3);
	
	
} )





})

