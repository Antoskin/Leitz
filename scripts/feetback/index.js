import $ from 'jquery'
import {feedScroll, drawSV, delSV} from './animation'
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
        
        delSV()
       
       if( $(this).parent(`.graf`).hasClass(`active_graf`) ) return false

       $(`.graf`).removeClass(`active_graf`)
       $(this).parent(`.graf`).addClass(`active_graf`)
        
        // hideString()
        setTimeout( () => {
            drawSV()
        },100 )


    } )




}