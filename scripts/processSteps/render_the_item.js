import $ from 'jquery'
import data from './instrumentsList'
import {changeLabel, firstAppear} from './processesAnimation'
import { TweenMax } from 'gsap';

export default function (e) {
   

    var curentProcess = data[e]


    const target = $(`.item-processing`);

    let instrument = target.find(`.instrument`),
        thumb = target.find(`.thumb-instrument`),
        title_descr = target.find(`.porocess-title`),
        descript = target.find(`.process-description`);
    
    // if grafic has old quatros - delete them 
    if($(`.quotr-cont`).children()) {
        $(`.quotr-cont div`).remove()
    }
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
        
     
        // switching process in card
        // $(`.quotr-cont .q`).click( function() {
        //     let id = $(this).attr('data-keys')

        //         setTimeout( () => {
        //             title_descr.text(curentProcess['process'][id]['the_proc'])
        //             descript.text(curentProcess['process'][id]['description'])
        //             //console.log(curentProcess['process'][id]['the_proc'])
        //         },500 )
                
        //         changeLabel()
        // } )
}


