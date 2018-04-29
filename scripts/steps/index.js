import $ from 'jquery'
import anim from './stepsAnimation'

export default () => {
    

    $(`.step-item p`).click( function() {
        let infa = $(this).text()
        return anim( infa )
    } )

}