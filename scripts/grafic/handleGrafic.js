import grafData from './graficDataList'
import changeBlock from './changeBlockAnim';
import { dinamicPrecent } from './renderGrafic';

import autoClicker from './autoChange';

export default function() {
    autoClicker();
    changeBlock() // click presentation button

    // dom targets title, text, blue_grafic 
	var appWrap = $('.wrapper-text-grafic'),
    titile_2 = appWrap.find('.left-text h2'),
    text_2 = appWrap.find('.main-description-presentation'),
    graf_w = appWrap.find('.dinamic-grag'),
    walpaper = $('.main-presentation-background'),
    shadow = $('.main-presentation-shadow');
   

    $('.but-graf').click(function() { //when click rerender actual data from graficDataList
        $('.but-graf').removeClass('actived') //removes and adds active class to owl
        $(this).addClass('actived')
        var index = $(this).attr('data-ind')

        TweenMax.to(shadow, 1, { backgroundColor:'#000' })
        TweenMax.to(shadow, 1, { backgroundColor:'rgba(0, 0, 0, 0.5)' }).delay(1);
        setTimeout(()=> { walpaper.css({'background':`url(../img/${grafData[index].img}.png)`})},800)
        titile_2.text( grafData[index].title ) //change title, text
        text_2.text( grafData[index].text )
       
        //walpaper.css({'background':'red'});
        TweenMax.fromTo(titile_2, 1, {opacity:0, y:-20},{opacity:1,y:0}) //animate title, text
        TweenMax.fromTo(text_2, 1, {opacity:0, y:20},{opacity:1,y:0})
    
        $('.dinamic-item').remove() // blue graf restart
        dinamicPrecent(grafData[index].quattro) //
    
    
        let tma = new TimelineMax();
        // dinamic right grafic info
        const scelet = `<div class="stinger">
                            <div class="type-service"></div>
                            <div class="grows-precent">+ <span class="grows-precent-target"></span> % </div>
                        </div>`
    
        tma.staggerFrom('.dinamic-item', 0.3, {opacity:0},0.3);
        $('.dinamic-item').last().append(scelet);
        tma.staggerTo('.stinger',1, {width: '400px'});
    
        let serv = $('.stinger').find('.type-service');
        let prec = $('.stinger').find('.grows-precent-target');
        serv.text(grafData[index].typeService);
        prec.text(grafData[index].precent);
        tma.staggerFrom('.stinger> div',1.4, {x:-10,opacity: 0});
    
    })
}