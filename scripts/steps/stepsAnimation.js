import $ from 'jquery'
import { TweenMax } from 'gsap';

export default function(e) {
    const tm = TweenMax

    console.log(e)
    //$(`.step-item p`).click( function() {
        tm.to(`.agranka`,1,{width:'1px', height:'1px', opacity:0})
        tm.to(`.name-of-instrument`,1,{opacity:0})
        tm.staggerTo(`.wrapper-stepses .step-item`,1,{opacity:0,x:10},0.2)
        tm.staggerTo(`.steps-labels div`,1, {opacity:0,x:-10},.3)
    //} )

}