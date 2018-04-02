import $ from 'jquery';
import {materialize} from 'materialize-css';
import sliders from './sliders'
import sv from './SVGlines'
import spinner from './spinner';


$(document).ready(function() {
	sliders();
	sv();
	spinner();
	console.log('!');
})