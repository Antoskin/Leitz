import $ from 'jquery'
import {fadeIn, feedScroll, showString, hideString} from './animation'
import render from './render_grafics'
import feedbackList from './feedList'
import switchActiveGraf from './activeGraf'




export default function() {
    let n = feedbackList[0].grafic
    render(n)
    feedScroll()
    switchActiveGraf()

    //showString()

    $(`.q`).click( function() {

        if( $(this).parent(`.graf`).hasClass(`active_graf`) ) return false

       $(`.graf`).removeClass(`active_graf`)
        $(this).parent(`.graf`).addClass(`active_graf`)
        
        hideString()
        setTimeout( () => {
            showString()
        },2000 )
    } )


    // let loo = 0;
    // $(`#testsr`).click(function() {

    //     $(`.year-wrap .graf`).children().remove()

    //     setTimeout( () => {
    //         render(feedbackList[loo].grafic)
    //     },1000 )
    //     { loo >= 2 ? loo = 0: loo++ }
    // })

    


}