
export default function() {
    var controller = new ScrollMagic.Controller();
    
    // var tm = new TimelineLite();
    // tm.add(TweenMax.from('.tit1',2,{opacity:0, y: 20}));
    // new ScrollMagic.Scene({
    //      triggerElement: '.service-steps',
    //      triggerHook: 0.8,
    //      reverse: false
    // }).setTween(tm)
    // .addTo(controller)
    // .addIndicators({name : 'starts from'})

    // test
    // var tm1 = new TimelineLite();
    // tm1.add(TweenMax.from('.tit2',2,{opacity:0, y: 20}));
    // new ScrollMagic.Scene({
    //      triggerElement: '.team-slider-section',
    //      triggerHook: 0.8,
    //      reverse: false
    // }).setTween(tm1)
    // .addTo(controller)
    // .addIndicators({name : 'starts from'})


    // presentation div
    let tm2 = new TimelineLite();
    tm2.add(TweenMax.fromTo('.presentation-slider-shadow',1, {backgroundColor:'#000'},{backgroundColor:'rgba(0, 0, 0, 0.5)'}))
    tm2.add(TweenMax.staggerFrom('.slick-dots li',1, {y:'20',opacity:'0'},0.4))
    new ScrollMagic.Scene({
        triggerElement: '.presentation-slider',
        triggerHook: 0.6,
   }).setTween(tm2)
   .addTo(controller)
   
    console.log(`scroll`)


    // little slider
//     let tm3 = new TimelineLite();
//     tm3.add(TweenMax.staggerFrom('.slick-dots li',1, {y:'10'}))
//     new ScrollMagic.Scene({
//         triggerElement: '.presentation-slider',
//         triggerHook: 0.6,
//    }).setTween(tm2)
//    .addTo(controller)
}