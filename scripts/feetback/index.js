import $ from 'jquery'
import {feedScroll, drawSV, delSV, stringAnimFadeIn, stringAnimFade} from './animation'
import render from './render_grafics'
import feedbackList from './feedList'
import renderActiveGrafSvg from './activeGraf'
import handler from './handler'




export default function() {
    let n = feedbackList[0].grafic // 
    render(n)
    feedScroll() // анимация при скролле
    renderActiveGrafSvg()

    handler() // переключение фото имени и комментария

    //showString()

    $(`.q`).click( function() {
        
        stringAnimFade()
       $(`.graf`).removeClass(`active_graf`)
       $(this).parent(`.graf`).addClass(`active_graf`)
        
        // hideString()
        setTimeout( () => {
            stringAnimFadeIn()
        },1000 )
       


    } )




}