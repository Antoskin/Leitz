import $ from 'jquery';
import {materialize} from 'materialize-css';
import sliders from './sliders'
import processItem from './grafic/procesSteps';
import sv from './SVGlines'
import grafic from './grafic/handleGrafic';

$(document).ready(function() {
	$('#preloader').delay(1000).fadeOut(666);
	processItem()
	sliders()
	grafic()
	sv()
	//spinner();

	// materializecss
	$('.tooltipped').tooltip();
	$('.modal').modal();
	// anchor
	$('.steps').click(() => {$('body, html').animate({scrollTop:$('.service-steps').offset().top},777)})
	//console.log('!ss');
})