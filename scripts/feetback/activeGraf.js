
export default function() {

    let sk = `<article class="stinger-two">
                    <div class="left_border"></div>
            </article>` // линия

    
    let grafs = [`graf-one`,`graf-two`,`graf-three`,`graf-four`,`graf-five`,`graf-six`] // классы 6ти боков-графков
    
    // const addString = () => { // ф-я добавления линии в последний квадрат каждого графика
    //     return $.each( grafs, (i,val) => $(`.${val} .q`).last().append(sk))
    // } 
    
    setTimeout(() => { // добавляем через 3 сек
        addString()
    },3000)
}