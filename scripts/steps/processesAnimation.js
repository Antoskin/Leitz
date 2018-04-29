import $ from 'jquery'
import { TweenMax } from 'gsap';

export function fadeOut () {
    const tm = TweenMax
        tm.to(`.agranka`,1,{width:'1px', height:'1px', opacity:0})
        tm.to(`.name-of-instrument`,1,{opacity:0})
        tm.staggerTo(`.wrapper-stepses .step-item`,1,{opacity:0,y:-10},0.2)
        tm.staggerTo(`.steps-labels div`,1, {opacity:0,x:-10},.3)
}

export function fadeIn () {
    const tm = TweenMax
        tm.to(`.agranka`,1,{width:'190px', height:'100%', opacity:1})
        tm.to(`.name-of-instrument`,1,{opacity:1})
        tm.staggerTo(`.wrapper-stepses .step-item`,1,{opacity:1,y:0},0.2)
        tm.staggerTo(`.steps-labels div`,1, {opacity:1,x:0},.3)
}

export function animationAppear() {
    const tm = TweenMax
   
    tm.to(`.porocess-title`, .5, {x:-30,opacity:0})
    tm.to(`.porocess-title`, 1, {x:0,opacity:1}).delay(.5)

    tm.to(`.process-description`, 0.1 ,{ y:'-20', opacity:'0' })
    tm.to(`.process-description`, 1 ,{ y:'0', opacity:'1' }).delay(0.5)
}

export function firstAppear() {
    const tm = TweenMax

    tm.fromTo(`.thumb-instrument-wrap`, 1, {scale:.4, opacity:0},{scale:1,opacity:1} )
    tm.fromTo(`.instrument`, .6, {x:-30, opacity:0},{x:0,opacity:1} )
    tm.fromTo(`.porocess-title`, .6, {x:-30, opacity:0},{x:0,opacity:1} ).delay(1)
    tm.fromTo(`.process-description`, .6 ,{ y:'-20', opacity:'0' },{y:0,opacity:1}).delay(1)

    tm.staggerFrom(`.quotr-cont> div`, .6, { opacity:0, y: -10 },.1)
   
}

export function lastAppear() {
    const tm = TweenMax

    tm.to(`.thumb-instrument-wrap`, 1, {scale:.4, opacity:0} )
    tm.to(`.instrument`, .6, {x:-30, opacity:0} )
    tm.to(`.porocess-title`, .6, {x:-30, opacity:0} ).delay(1)
    tm.to(`.process-description`, .6 ,{ y:'-20', opacity:'0' }).delay(1)

    tm.staggerTo(`.quotr-cont> div`, .6, { opacity:0, y: -10 },.1)
   
}