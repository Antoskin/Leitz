import $ from 'jquery'
import data from './instrumentsList'

class Process {
    constructor(id) {
        this.id = id
    }
    dataInserts() {
        document.querySelector('.instrument').innerHTML = data[this.id].instrument
        document.querySelector('.thumb-instrument').src = data[this.id].imageUrl
        document.querySelector('.porocess-title').innerHTML = data[this.id]['process'][0]['the_proc']
        document.querySelector('.process-description').innerHTML = data[this.id]['process'][0]['description']
    }
   
    graficInsert() {
        var graficPlace = $('.quotr-cont')
            graficPlace.children().remove() //reset grafic

        var curent_grafic = data[this.id]['process'].map( (i, ident ) => {
            return `<div class=${i['status'] ? `q` : `qw`} data-keys=${ident} ></div>`
        })
        graficPlace.appendTo(curent_grafic)
    }
}

export default function (e) {
    var the_process = new Process(e)
        the_process.dataInserts()
        the_process.graficInsert()
}