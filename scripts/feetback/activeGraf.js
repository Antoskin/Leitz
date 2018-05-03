
export default function() {

    let sk = `<article class="stinger-two">
                    <div class="left_border"></div>
            </article>` // линия

    let canv = `<canvas id="test_canv" style="border:1px solid #000000;"></canvas>`

    let svh =  `<svg id="line1" class="graf1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     width="80%" height="6px">
                    <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="2px" stroke-linecap="round" stroke-linejoin="miter" fill="none"
                     d="M2.500,2.500 L1034.245,2.500 "/>
                </svg>`



    const addCanv = () => { // ф-я добавления линии svg в последний квадрат каждого графика
        return (
            $(`.graf-six .q`).last().append(svh),
            $(`.graf-five .q`).last().append(svh),
            $(`.graf-four .q`).last().append(svh),
            $(`.graf-three .q`).last().append(svh),
            $(`.graf-two .q`).last().append(svh),
            $(`.graf-one .q`).last().append(svh)
        )
    }

    setTimeout(() => { // добавляем через 3 сек
        addCanv()
    },3000)



}