
import  $ from 'jquery'
import data from './instrumentsList'
import the_process  from './render_the_item'

export default function() {

    // 1. mapping array of all process
    // 2. mapping arr into arr 
    // 3. checking status for class
    // 4. put all data to ready structure
    // 5. append to target place
    let list = data.map( (i, index) => { //1
        let quatres = i.process.map( j => { //2
            return `<div class=${j['status'] ? `q` : `qw`}></div>` //3
        } )

        //4
        let structure = `<div class="step-item">
                            <p data-id=${index} >
                                ${i.instrument} 
                                <img class="mob-proc-svgs" src="./img/white-line.png" alt=""> 
                            </p>
                            <div class="quotres-cont">
                                ${quatres}
                            </div>
                        </div>`
        $(`.wrapper-stepses`).append(structure) //5
    } )


}
