import $ from 'jquery'
import anim from './processesAnimation'
import renderProcesses from './renderProcesses'
import renderCard from './render_the_item'

export default () => {
    renderProcesses() //render all steps

    $(`.step-item p`).click( function() {
        
        anim() // fade in animation
        
        // 1. get number of clicked process
        // 2. put it to render the curent process
        let d_id = $(this).parent(`.step-item`).attr(`data-id`) // 1
        renderCard(d_id) // 2
     
      
        setTimeout( () => {
            $(`.item-processing`).addClass(`showed`) // show card of the current process
        },2000 )
    })

}