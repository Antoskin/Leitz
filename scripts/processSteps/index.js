import $ from 'jquery'
import { fadeOut, fadeIn, lastAppear, firstAppear } from './processesAnimation'
import renderProcesses from './renderProcesses'
import renderCard from './render_the_item'
import change from './change_the_item.js'


class Process {
    constructor(id) {
        this.id = id
    }
    render() {
        renderProcesses()
    }
    hideAllanim() {
        fadeOut()
    }
    renderItem() {
        renderCard(this.id)
    }
    renderItemAnim() {
        setTimeout( () => {
            firstAppear()
            document.querySelector('.item-processing').classList.add('showed');
        }, 2000 )
    }
    hideItemAnim() {
        setTimeout( () => {
            fadeIn()
            document.querySelector('.item-processing').classList.remove('showed')
        },1500 )
        lastAppear()
    }
    changeItem() {
        change(this.id)
    }
}

export default () => {
    var processes = new Process()
    processes.render()
    
    $(`.step-item p`).click( function() { 
        const id = $(this).attr(`data-id`)
        
        var process = new Process(id)
            process.hideAllanim()
            process.renderItem() 
            process.renderItemAnim()
            process.changeItem()
    })


    $(`.instrument, .close-item`).click(function() { // go back to table process
        processes.hideItemAnim()        
    })

}