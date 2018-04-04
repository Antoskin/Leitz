import grafData from './graficDataList'
import { hundredPrecent, dinamicPrecent } from './renderGrafic';

export default function() {

	hundredPrecent(6);
	dinamicPrecent(3);

    	// dom targets title, text, blue_grafic 
	var appWrap = $('.wrapper-text-grafic'),
    titile_2 = appWrap.find('.left-text h2'),
    text_2 = appWrap.find('.main-description-presentation'),
    graf_w = appWrap.find('.dinamic-grag')

    $('.but-graf').click(function() { //when click rerender actual data from graficDataList
        let index = $(this).attr('data-ind');
        titile_2.text( grafData[index].title );
        text_2.text( grafData[index].text );
        $('.dinamic-item').remove()
        dinamicPrecent(grafData[index].precent);
    })
}