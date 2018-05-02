import $ from 'jquery';
import {materialize} from 'materialize-css';
import sliders from './recidents'
import processSteps from './steps';
import sv from './SVGlines'
import grafic from './grafic/handleGrafic';
import feed  from './feetback'

$(document).ready(function() {
	$('#preloader').delay(1000).fadeOut(666);
	processSteps()
	sliders()
	grafic()
	sv()
	feed()
	//spinner();

	// materializecss
	$('.tooltipped').tooltip();
	$('.modal').modal();
	// anchor
	$('.steps').click(() => {$('body, html').animate({scrollTop:$('.double-title-for-steps').offset().top},777)})
	//console.log('!ss');
})