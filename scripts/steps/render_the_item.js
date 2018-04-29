import $ from 'jquery'
import data from './instrumentsList'
import { TweenMax } from 'gsap';

export default function (e) {
   

    let curentProcess = data[e]

    const target = $(`.item-processing`);

    let instrument = target.find(`.instrument`),
        thumb = target.find(`.thumb-instrument`),
        title_descr = target.find(`.porocess-title`),
        descript = target.find(`.process-description`);
    
    // pushed grafic
    let quatro_graf_wrap = target.find(`.quotr-cont`),
        quatro_graf_infa = curentProcess['process'].map( (i, ident ) => {
            return `<div class=${i['status'] ? `q` : `qw`} data-keys=${ident} ></div>`
        } )
    quatro_graf_wrap.append(quatro_graf_infa)
    
        instrument.text(curentProcess.instrument)
        thumb.attr(`src`, curentProcess.imageUrl)
       
        title_descr.text(curentProcess['process'][0]['the_proc'])
        descript.text(curentProcess['process'][0]['description'])
        
        setTimeout( () => { //start first animation in 2 sec
            firstAppear()
        },2000 ) 

        // switching process in card
        $(`.quotr-cont .q`).click( function() {
            let id = $(this).attr('data-keys')

                setTimeout( () => {
                    title_descr.text(curentProcess['process'][id]['the_proc'])
                    descript.text(curentProcess['process'][id]['description'])
                    console.log(curentProcess['process'][id]['the_proc'])
                },500 )
                
                animetionAppear()
        } )
}


function animetionAppear() {
    const tm = TweenMax
   
    tm.to(`.porocess-title`, .5, {x:-30,opacity:0})
    tm.to(`.porocess-title`, 1, {x:0,opacity:1}).delay(.5)

    tm.to(`.process-description`, 0.1 ,{ y:'-20', opacity:'0' })
    tm.to(`.process-description`, 1 ,{ y:'0', opacity:'1' }).delay(0.5)
}

function firstAppear() {
    const tm = TweenMax

    tm.from(`.thumb-instrument-wrap`, 1, {scale:.4, opacity:0} )
    tm.from(`.instrument`, .6, {x:-30, opacity:0} )
    tm.from(`.porocess-title`, .6, {x:-30, opacity:0} ).delay(1)
    tm.from(`.process-description`, .6 ,{ y:'-20', opacity:'0' }).delay(1)

    tm.staggerFrom(`.quotr-cont> div`, .6, { opacity:0, y: -10 },.1).delay(1)
   
}