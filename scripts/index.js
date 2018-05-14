import $ from 'jquery';
import {materialize} from 'materialize-css';
import sliders from './recidents'
import processSteps from './processSteps';
import sv from './SVGlines'
import mainPresentation from './presentation/handleGrafic';
import feed  from './feetback'
import map from './map'
import mob_menu from './mobMenu'

$(document).ready(function() {


	
	mainPresentation()
	processSteps()
	sliders()
	
	sv()
	feed()
	map()
	mob_menu()

	

	// anchor
	$('.steps').click(() => {$('body, html').animate({scrollTop:$('.double-title-for-steps').offset().top},777)})

	$('#preloader').delay(1000).fadeOut(666); //тут задержка


})