import $ from 'jquery'
import { TweenMax, TimelineLite, TimelineMax } from 'gsap';


export function changeSlide()  {
    const tm = TweenMax
    const tl =  new TimelineLite();

    //get nodes
    let into = $(`.slider-of-res`)
        // name = into.find(`.name`),
        // pos = into.find(`.position`),
        // des = into.find(`.description`),
        // cont = into.find(`.contacts> a`)
        tm.to(`.name `,.3,{opacity:0,x:30})
        tm.to(`.name `,.3,{opacity:0,x:30})
        tm.to(`.position`,.3,{opacity:0})
        tm.to(`.position `,.3,{x:30})
        tm.to(`.description `,.2,{opacity:0, x: 30})
        tm.to(`.contacts`,.2,{opacity:0})
        tm.to(`.contacts a`,.2,{x: 30})
        tm.to(`.avatar-sl img`,.4,{scale:.8,opacity:.4})
        

       tm.to(`.name `,.9,{opacity:1, x:0}).delay(1.5)
       tm.to(`.position`,.6,{opacity:1,x:0}).delay(1.7)
       tm.to(`.description `,.9,{opacity:1, x:0}).delay(1.9)
       tm.to(`.contacts`,.9,{opacity:1}).delay(1.6)
       tm.to(`.contacts a`,.9,{x: 0}).delay(1.6)
       tm.to(`.avatar-sl img`,.6,{scale:1,opacity:1}).delay(1.1)
       
        // const tl1 =  new TimelineLite();
        // tl1.to(`.contacts> a`,.2,{opacity:0})
        // tl1.to(`.contacts> a`,1,{opacity:0})
        // tl1.to(`.contacts> a`,.2,{opacity:1})
}

