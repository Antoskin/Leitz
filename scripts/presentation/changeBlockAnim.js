import { hundredPrecent } from './renderGrafic';

export default function() {
    $('.presentation').click( function() {
        setTimeout( () => {
            TweenMax.to('#area-for-header-svg', .5, { opacity: 0, display:'none' })
            TweenMax.to('.the-content-description', .5, { opacity: 0 })
            TweenMax.to('.the-content-description', .5, { display: 'none' }  ).delay(0.5)
            TweenMax.to('.contact-phones', .5, { opacity: 0 }  )
        },1000 )
        TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'#000' }  ).delay(2);
        TweenMax.to('.the_content-presentation', .5, { display:'block', opacity:1 }  ).delay(2);
        TweenMax.to('.contact-phones', .5, { opacity: 1 }  ).delay(2);
        TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'rgba(0, 0, 0, 0.3)' }  ).delay(3);
        setTimeout( () => {
            $('.but-graf:eq(0)').click()
            TweenMax.fromTo('.left-blue-line', 2, {y:-20}, {opacity:1, y:0}).delay(1);
            hundredPrecent(6);
            let tmax = new TimelineMax();
            tmax.staggerTo('.compare-item', 0.3, {opacity:1}, 0.1 );
        }, 2000 )
    });
}