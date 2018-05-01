//import {$} from 'jquery'
import {TimelineLite, TweenMax} from 'gsap'

export function fadeIn() {
    let tl = new TimelineLite()
    let tm = TweenMax
    tl.staggerFromTo(`.graf .q`, .3, {opacity:0,y:10},{opacity:1,y:0}, .1)

    //let tl1 = new TimelineLite()
    tl.staggerFromTo(`.num-of-year`, .3, {x:-10,opacity:0},{x:0,opacity:1}, .1)


    // $(`.graf-six`).on(`DOMNodeInserted`, `.stinger-two`, function() {
    //     tl.to(`.stinger-two`,1, { width:'744px'})
    //     tl.to(`.stinger-two`,1, { height:'138px'})
    // })
    setTimeout( () => {
        tl.to(`.stinger-two`,1, { width:'744px'})
        tl.to(`.stinger-two`,1, { height:'138px'})
    },2000 )
    tl.fromTo(`.the-ava`,.3,{scacle:0.7,opacity:0},{scale:1,opacity:1})
    tl.staggerFromTo(`.who-is p`, 1, {x:-10,opacity:0},{x:0,opacity:1},.3)
    tl.fromTo(`.place-for-text`,1, {opacity:0, y:-20}, { opacity:1, y:0}) 
}

export function fadeOut() {
    let tl1 = new TimelineLite()
    tl1.to(`.stinger-two`,1, { height:'0'})
    tl1.to(`.stinger-two`,1, { width:'0'})
    
    tl1.fromTo(`.place-for-text`,1,{ opacity:1, y:0}, {opacity:0, y:-20} ) 
    tl1.staggerFromTo(`.who-is p`, 1, {x:0,opacity:1}, {x:-10,opacity:0},.3)
    tl1.fromTo(`.the-ava`,.3,{scale:1,opacity:1},{scacle:0.7,opacity:0})



    tl1.staggerFromTo(`.graf .q`, .3,{opacity:1,y:0}, {opacity:0,y:10}, .1)
    tl1.staggerFromTo(`.num-of-year`, .3, {x:0,opacity:1},{x:-10,opacity:0}, .1)
  
    
}


export function feedScroll() {  // first time on scroll animation fadeIn
    var controller = new ScrollMagic.Controller();
    let tm9 = new TimelineLite() // feedback
    tm9.staggerFromTo(`.graf .q`, .3, {opacity:0,y:-10},{opacity:1,y:0}, .1)
    tm9.staggerFromTo(`.num-of-year`, .3, {x:-10,opacity:0},{x:0,opacity:1}, .1)
          $(`.graf-six`).on(`DOMNodeInserted`, `.stinger-two`, function() {
            tm9.to(`.stinger-two`,1, { width:'744px'})
            tm9.to(`.stinger-two`,1, { height:'138px'})
            tm9.fromTo(`.the-ava`,.3,{scacle:0.7,opacity:0},{scale:1,opacity:1})
            tm9.staggerFromTo(`.who-is p`, 1, {x:-10,opacity:0},{x:0,opacity:1},.3)
            tm9.fromTo(`.place-for-text`,1, {opacity:0, y:-20}, { opacity:1, y:0}) 
          })
    new ScrollMagic.Scene({
            triggerElement: '.the_wrap_feed',
            triggerHook: 0.7,
            reverse: true
        }).setTween(tm9)
        .addTo(controller)
}