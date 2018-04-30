import sliders from './sliders'
import {changeSlide} from './anima'

export default () => {
    sliders()
    $(`.control-c`).click( function() {
        changeSlide()
    } )

    
    console.log(`!`)
}