import $ from 'jquery'
import { fadeOut, fadeIn, lastAppear } from './processesAnimation'
import renderProcesses from './renderProcesses'
import renderCard from './render_the_item'

export default () => {
    renderProcesses() //render all steps

    $(`.step-item p`).click( function() { ////render all steps
        fadeOut() // hide tabel processes
        // 1. get number of clicked process
        // 2. put it to render the curent process
        let d_id = $(this).parent(`.step-item`).attr(`data-id`) // 1
        renderCard(d_id) // 2
     
      
        setTimeout( () => {
            $(`.item-processing`).addClass(`showed`) // show card of the current process
        },2000 )
    })


    $(`.instrument`).click(function() { // go back to table process
        //console.log(`works`)
        lastAppear()
        
        setTimeout( () => {
            fadeIn()
            $(`.item-processing`).removeClass(`showed`) // hide card of the current process
        },2000 )
    })

}