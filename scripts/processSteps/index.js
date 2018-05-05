import $ from 'jquery'
import { fadeOut, fadeIn, lastAppear } from './processesAnimation'
import renderProcesses from './renderProcesses'
import renderCard from './render_the_item'
import change from './change_the_item.js'

import { switchNext } from './change_the_item'

export default () => {
    renderProcesses() //render all steps
    change()
    $(`.step-item p`).click( function() { ////render all steps
        fadeOut() // скрывает все пункты
       
        $(`.step-item`).removeClass(`active`)
        $(this).parent(`.step-item`).addClass('active')

        let d_id = $(this).attr(`data-id`) // узнаём id выбранного пункта
        renderCard(d_id) // передаём для рендера пункта
         change => {d_id}

         

        setTimeout( () => {
            $(`.item-processing`).addClass(`showed`) // show card of the current process
        },2000 )

    })


    $(`.instrument`).click(function() { // go back to table process
        lastAppear()
        setTimeout( () => {
            fadeIn()
            $(`.item-processing`).removeClass(`showed`) // hide card of the current process
        },2000 )
    })

}