import list from './feedList'
import { changeFeed } from './animation'


export default function() {

    $(`.q`).click( function() {
        let num = $(this).parent(`.graf`).attr(`data-graf`)
        //console.log(num)
        console.log(list[num])

        changeFeed()


        setTimeout( () => {
            $(`.the-ava img`).attr(`src`,list[num].img) //меняем человека feedback
            $(`.name-feed`).text(list[num].name)
            $(`.position-feed`).text(list[num].position)
            $(`.place-for-text`).text(list[num].comment)
        },300 )

    } )



}