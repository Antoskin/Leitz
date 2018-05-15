
export default function() {

    // let sk = `<article class="stinger-two">
    //                 <div class="left_border"></div>
    //         </article>` // линия

    // let canv = `<canvas id="test_canv" style="border:1px solid #000000;"></canvas>`

    let svh =  `<svg id="line1" class="graf1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     width="80%" height="6px">
                    <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="2px" stroke-linecap="round" stroke-linejoin="miter" fill="none"
                     d="M2.500,2.500 L1034.245,2.500 "/>
                </svg>`
    
        let lira6 = `<svg id="sloy_1"  class="feeSV feedLineoldlast"
                data-name="sloy_1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 410 700">
                <defs>
                    <style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;}</style>
                </defs>
                
                <line class="cls-1" x1="2200" y1="5" x2="-1720" y2="5"/>
                <line class="cls-1" x1="-1720" y1="5" x2="-1720" y2="850"/>
                <line class="cls-1" x1="1420" y1="217.5" x2="1420" y2="217.5"/>
            </svg>`
    let lira5 = `<svg id="sloy_1"  class="feeSV feedLineold"
                    data-name="sloy_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="100 210 210 700">
                    <defs>
                        <style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;}</style>
                    </defs>
                    <line class="cls-1" x1="1860" y1="362.5" x2="1860" y2="217.5"/>
                    <line class="cls-1" x1="1860" y1="218" x2="-1440" y2="218"/>
                    <line class="cls-1" x1="-1440" y1="217.5" x2="-1440" y2="900"/>
                </svg>`
    
        let lira4 = `<svg id="sloy_1"  class="feeSV feedLineold"
                data-name="sloy_1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="100 210 210 700">
                <defs>
                    <style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;}</style>
                </defs>
                <line class="cls-1" x1="1590" y1="672.5" x2="1590" y2="217.5"/>
                <line class="cls-1" x1="1590" y1="218" x2="-1165" y2="218"/>
                <line class="cls-1" x1="-1165" y1="217.5" x2="-1165" y2="920"/>
                
               
                
            </svg>`
        let lira3 = `<svg id="sloy_1"  class="feeSV feedLineold"
            data-name="sloy_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="100 210 210 700">
            <defs>
                <style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;}</style>
            </defs>
            <line class="cls-1" x1="1275" y1="865" x2="1275" y2="217.5"/>
            <line class="cls-1" x1="1275" y1="218" x2="-860" y2="218"/>
            <line class="cls-1" x1="-860" y1="217.5" x2="-860" y2="920"/>
        </svg>`

    //     let lira2 = `<svg id="sloy_1"  class="feedLineold"
    //     data-name="sloy_1" 
    //     xmlns="http://www.w3.org/2000/svg" 
    //     viewBox="100 210 210 700">
    //     <defs>
    //         <style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;}</style>
    //     </defs>
    //     <line class="cls-1" x1="-252" y1="218" x2="1250" y2="218"/>
    //     <line class="cls-1" x1="-252" y1="217.5" x2="-252" y2="800"/>
    //     <line class="cls-1" x1="1250" y1="217.5" x2="1250" y2="472.5"/>
    // </svg>`

    let lira2 = `<svg id="sloy_1"  class="feeSV feedLineold"
                    data-name="sloy_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="100 210 210 700">
                    <defs>
                        <style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;}</style>
                    </defs>

                    <line class="cls-1" x1="880" y1="972.5" x2="880" y2="217.5"/>
                    <line class="cls-1" x1="880" y1="218" x2="-470" y2="218"/>
                    <line class="cls-1" x1="-470" y1="217.5" x2="-470" y2="900"/>
                    
                </svg>`

    let lira1 = `<svg id="sloy_1"  class="feeSV feedLineold"
                    data-name="sloy_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="100 210 210 700">
                    <defs>
                        <style>.cls-1{fill:#fff;stroke:#fff;stroke-miterlimit:10;}</style>
                    </defs>
                    <line class="cls-1" x1="575" y1="972.5" x2="575" y2="217.5"/>
                    <line class="cls-1" x1="575" y1="218" x2="-160" y2="218"/>
                    <line class="cls-1" x1="-160" y1="217.5" x2="-160" y2="900"/>
                </svg>`


    const addCanv = () => { // ф-я добавления линии svg в последний квадрат каждого графика
        return (
            $(`.graf-six .q`).last().append(lira6),
            $(`.graf-five .q`).last().append(lira5),
            $(`.graf-four .q`).last().append(lira4),
            $(`.graf-three .q`).last().append(lira3),
            $(`.graf-two .q`).last().append(lira2),
            $(`.graf-one .q`).last().append(lira1)
        )
    }
    setTimeout(() => { // добавляем через 3 сек
        addCanv()
    },1000)



}