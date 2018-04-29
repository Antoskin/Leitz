import $ from 'jquery'
import anim from './stepsAnimation'
import renderProcesses from './renderProcesses'

export default () => {
    renderProcesses()

    $(`.step-item p`).click( function() {
        let infa = $(this).text()
        return anim( infa )
    } )

    

}