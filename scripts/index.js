import $ from 'jquery';
import {materialize} from 'materialize-css';
import {slick} from 'slick-carousel';
import sliders from './sliders';
import sv from './SVGlines';


$(document).ready(function() {
	sliders();
	sv();
	console.log('!');
})