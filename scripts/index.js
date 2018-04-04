import $ from 'jquery';
import {materialize} from 'materialize-css';
import sliders from './sliders'
import sv from './SVGlines'
import spinner from './spinner';
import stepsAnimation from './steps/stepsAnimation';


$(document).ready(function() {
	stepsAnimation();
	sliders();
	sv();
	spinner();

	// materializecss
	$('.tooltipped').tooltip();
	$('.modal').modal();
	// anchor
	$('.steps').click(() => {$('body, html').animate({scrollTop:$('.service-steps').offset().top},777)})
	console.log('!');
})