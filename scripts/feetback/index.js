import $ from 'jquery'
import {fadeIn, feedScroll} from './animation'
import render from './render_grafics'
import feedbackList from './feedList'




export default function() {
    let n = feedbackList[1].grafic
    render(n)
    feedScroll()


    // let loo = 0;
    // $(`#testsr`).click(function() {

    //     $(`.year-wrap .graf`).children().remove()

    //     setTimeout( () => {
    //         render(feedbackList[loo].grafic)
    //     },1000 )
    //     { loo >= 2 ? loo = 0: loo++ }
    // })

    


}