import $ from 'jquery'
import {fadeIn, feedScroll} from './animation'
import render from './render_grafics'
import feedbackList from './feedList'




export default function() {
    let n = feedbackList[1].grafic
    render(n)
    feedScroll()
    //fadeIn()
    // setTimeout( () => {
    //     let n = feedbackList[1].grafic
    //     render(n)
    //     fadeIn() //show animation
       
    // },2000 )
    //render(1,2,5)

    let loo = 0;
    $(`#testsr`).click(function() {

        $(`.year-wrap .graf`).children().remove()

        setTimeout( () => {
            render(feedbackList[loo].grafic)
        },2000 )
        { loo >= 2 ? loo = 0: loo++ }
    })

    


}