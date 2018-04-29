
import  $ from 'jquery'
import data from './instrumentsList'

export default function() {
   

    let list = data.map( (i, index) => {

        let quatres = i.process.map( j => {
            return `<div class=${j['status'] ? `q` : `qw`}></div>`
        } )

        let structure = `<div class="step-item">
                            <p>${i.instrument}</p>
                            <div class="quotres-cont">
                                ${quatres}
                            </div>
                        </div>`

        $(`.wrapper-stepses`).append(structure)
    } )

    console.log(data)
}
