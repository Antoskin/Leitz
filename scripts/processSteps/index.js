import $ from 'jquery'
import { fadeOut, fadeIn, lastAppear, firstAppear } from './processesAnimation'
import renderProcesses from './renderProcesses'
import renderCard from './render_the_item'
import change from './change_the_item.js'

import { switchNext } from './change_the_item'

export default () => {
    renderProcesses() //render all steps
    
    
    $(`.step-item p`).click( function() { 
        fadeOut() // скрывает renderProcesses
        
        let d_id = $(this).attr(`data-id`) // get id выбранного пункта
        renderCard(d_id) // передаём для рендера пункта
    
        setTimeout( () => {
            $(`.item-processing`).addClass(`showed`) // show card of the current process
        },2000 )

       setTimeout( () => { //start first animation in 2 sec
            firstAppear()
        },2000 ) 


        change(d_id)
    })


    $(`.instrument, .close-item`).click(function() { // go back to table process
        lastAppear()
        setTimeout( () => {
            fadeIn()
            $(`.item-processing`).removeClass(`showed`) // hide card of the current process
        },2000 )
    })

}