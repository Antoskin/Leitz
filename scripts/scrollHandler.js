
export default function() {
    var controller = new ScrollMagic.Controller();
    // presentation div
    let tm2 = new TimelineLite();
    tm2.add(TweenMax.fromTo('.presentation-slider-shadow',1, {backgroundColor:'#000'},{backgroundColor:'rgba(0, 0, 0, 0.5)'}))
    tm2.add(TweenMax.staggerFrom('.slick-dots li',0.4, {y:'20',opacity:'0'},0.2))
    new ScrollMagic.Scene({
        triggerElement: '.presentation-slider',
        triggerHook: 0.6,
   }).setTween(tm2)
   .addTo(controller)
   

    // spinner svg lines
    //revolv-slide-wrap    
    let lineR1 = $('.line-rev1 path'),
        lineR2 = $('.line-rev2 path'),
        lineR3 = $('.line-rev3 path'),
        lineR4 = $('.circle-rev-little path'),
        lineR5 = $('.circle-rev-little-white path');
    let tm3 = new TimelineLite();
    tm3.from(lineR1, 1, { drawSVG:'0%' });
    tm3.from(lineR5, 1, { drawSVG:'0%' });
    new ScrollMagic.Scene({
        triggerElement: '.revolv-slide-wrap  ',
        triggerHook: 0.5,
        reverse: false
    }).setTween(tm3).addTo(controller)
   
    let tm4 = new TimelineLite();
    tm4.from(lineR2, 1, { drawSVG:'0%' });
    tm4.from(lineR3, 2, { drawSVG:'0%' });
    tm4.from(lineR4, 0.5, { drawSVG:'0%' });
    new ScrollMagic.Scene({
        triggerElement: '.revolv-slide-wrap  ',
        triggerHook: 0.7,
        reverse: false
    }).setTween(tm4).addTo(controller)

    let thies = $('#knob')
    let tm5 = new TimelineLite();
   
    tm5.from(thies, 0.8, {rotation:250})
    new ScrollMagic.Scene({
        triggerElement: '.area-for-spinner',
        triggerHook: 0.8,
        reverse: false
    }).setTween(tm5).addTo(controller)


    // ETAPS
    let tm6 = new TimelineLite();
        tm6.staggerTo('.sibl-step',1, {
            scale:1,
            borderColor:'#007cbf',
            borderWidth:'3px',
            className:'+=actived'
            },2).delay(2);
        new ScrollMagic.Scene({
            triggerElement: '.widthest-container',
            triggerHook: 0.7,
            reverse: false
        }).setTween(tm6).addTo(controller)
    


    let tm7 = new TimelineLite();
    //  tm7.staggerFromTo('.blue-owl', .5, {y:20}, { y:0, opacity:1 }, .2).delay(4);
    //  tm7.from('.image-target', 2, {opacity:0, y: -40 }).delay(4);
     tm7.from('.steps-wrapper svg path', 2, { drawSVG:'0%' }).delay(14);
      new ScrollMagic.Scene({
          triggerElement: '.widthest-container',
          triggerHook: 0.7,
          reverse: false
      }).setTween(tm7)
      .addTo(controller)



    console.log(`scroll`)

}