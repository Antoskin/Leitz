//import {$} from 'jquery'
import {TimelineLite, TweenMax} from 'gsap'
import '../../node_modules/gsap2/plugins/DrawSVGPlugin.min';


// export function fadeIn() {
//     let tl = new TimelineLite()
//     let tm = TweenMax
//     tl.staggerFromTo(`.graf .q`, .3, {opacity:0,y:10},{opacity:1,y:0}, .1)

//     //let tl1 = new TimelineLite()
//     tl.staggerFromTo(`.num-of-year`, .3, {x:-10,opacity:0},{x:0,opacity:1}, .1)


//     tl.fromTo(`.the-ava`,.3,{scacle:0.7,opacity:0},{scale:1,opacity:1})
//     tl.staggerFromTo(`.who-is p`, 1, {x:-10,opacity:0},{x:0,opacity:1},.3)
//     tl.fromTo(`.place-for-text`,1, {opacity:0, y:-20}, { opacity:1, y:0}) 
// }






export function feedScroll() {  // first time on scroll animation fadeIn
    var controller = new ScrollMagic.Controller();
    let tm9 = new TimelineLite() // feedback
    tm9.staggerFromTo(`.graf .q`, .3, {opacity:0,y:-10},{opacity:1,y:0}, .1)
    tm9.staggerFromTo(`.num-of-year`, .3, {x:-10,opacity:0},{x:0,opacity:1}, .1)
          $(`.graf-six`).on(`DOMNodeInserted`, `.stinger-two`, function() {
            tm9.to(`.stinger-two`,1, { width:'723px'})
            tm9.to(`.left_border`,1, { height:'136px'})
            tm9.fromTo(`.the-ava`,.3,{scacle:0.7,opacity:0},{scale:1,opacity:1})
            tm9.staggerFromTo(`.who-is p`, 1, {x:-10,opacity:0},{x:0,opacity:1},.3)
            tm9.fromTo(`.place-for-text`,1, {opacity:0, y:-20}, { opacity:1, y:0}) 
          })
    tm9.fromTo(`.the-ava`,.3,{scacle:0.7,opacity:0},{scale:1,opacity:1})
    tm9.staggerFromTo(`.who-is p`, 1, {x:-10,opacity:0},{x:0,opacity:1},.3)
    tm9.fromTo(`.place-for-text`,1, {opacity:0, y:-20}, { opacity:1, y:0}) 
    new ScrollMagic.Scene({
            triggerElement: '.the_wrap_feed',
            triggerHook: 0.7,
            reverse: true
        }).setTween(tm9)
        .addTo(controller)
}




// тесt свг линия

export function drawSV() {
    let tm = TweenMax
    tm.fromTo(`.active_graf .graf1 path`, .9, 
        { drawSVG:'0%', opacity: 0 },
        { drawSVG:'100%',opacity:1 });
}

export function delSV() {
    let tm = TweenMax
    tm.to(`.graf1 path`, .5, { drawSVG:'0%', opacity: 0 })
}