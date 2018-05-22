import sliders from './sliders'
import {changeSlide} from './anima'

export default () => {
    sliders()

    $(`.control-c`).click( function() {
        //changeSlide()

       setTimeout( () => {
        let getPos = $(`.slick-current .change-position-of-slider`)
        let putPos = $(`.change-position-of-slider-targ`)
        console.log(getPos.text())
        putPos.text(getPos.text())
       }, 100 )
    } )

    let teamSlider = $(`.slider-of-res`)
    teamSlider.find(`.place-for-arrows-cus .prev-ar`).append($(`.before-button`))
    teamSlider.find(`.place-for-arrows-cus .next-ar`).append($(`.after-button`))
    
}