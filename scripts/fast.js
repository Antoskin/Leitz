

$(document).ready( function() {

	TweenMax.to('.sibl-step',1.5, { opacity:1 });

// area-for-header-svg the-content-description contact-phones

// $('.presentation').click( function() {
// 	setTimeout( () => {
// 		TweenMax.to('#area-for-header-svg', .5, { opacity: 0, display:'none' }  )
// 		TweenMax.to('.the-content-description', .5, { opacity: 0 }  )
// 		TweenMax.to('.the-content-description', .5, { display: 'none' }  ).delay(0.5)
// 		TweenMax.to('.contact-phones', .5, { opacity: 0 }  )
// 	},1000 )
// 	TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'#000' }  ).delay(2);
// 	TweenMax.to('.the_content-presentation', .5, { display:'block', opacity:1 }  ).delay(2);
// 	TweenMax.to('.contact-phones', .5, { opacity: 1 }  ).delay(2);
// 	TweenMax.to('.main-presentation-shadow', .5, { backgroundColor:'rgba(0, 0, 0, 0.3)' }  ).delay(3);
// 	setTimeout( () => {
// 		$('.but-graf:eq(0)').click()
// 		TweenMax.fromTo('.left-blue-line', 2, {y:-20}, {opacity:1, y:0}).delay(1);
// 		hundredPrecent(6);
// 		let tmax = new TimelineMax();
// 		tmax.staggerTo('.compare-item', 0.3, {opacity:1}, 0.1 );
// 	}, 3000 )
// });




// GRAFIC

// const grafData = [
//     {
//         title: 'ВОЗДУШНАЯ ЧИСТКА ДЕТАЛЕЙ',
//         text: 'Спосіб очистки поверхонь твердих тіл в миючому розчині під впливом ультразвукових коливань. Ця технологія дозволяє не лише отримати чистий інструмент, але й значно прискорити процес обслуговування.',
// 		typeService: 'Очистка',
// 		quattro: 3,
// 		precent: 50
//     },
//     {
//         title: 'УЛЬТРАЗВУКОВА ЧИСТКА ДЕТАЛЕЙ',
// 		text: 'Спосіб очистки..',
// 		typeService: 'Очистка..',
// 		quattro: 5,
// 		precent: 44
//     },
//     {
//         title: 'ПАРНАЯ ЧИСТКА ДЕТАЛЕЙ',
//         text: 'Спосіб очистки поверхонь твердих тіл в миючому розчині під впливом ультразвукових коливань. Ця технологія дозволяє не лише отримати чистий інструмент, але й значно прискорити процес обслуговування.',
// 		typeService: 'Полировка',
// 		quattro: 2,
// 		precent: 70
//     },
//     {
//         title: 'ВОДНАЯ ЧИСТКА ДЕТАЛЕЙ',
//         text: 'Спосіб очистки поверхонь твердих тіл в миючому розчині під впливом ультразвукових коливань. Ця технологія дозволяє не лише отримати чистий інструмент, але й значно прискорити процес обслуговування.',
// 		typeService: 'Заточка',
// 		quattro: 4,
// 		precent: 110
//     },
//     {
//         title: 'ЗВУКОВАЯ ЧИСТКА ДЕТАЛЕЙ',
//         text: 'Спосіб очистки поверхонь твердих тіл в миючому розчині під впливом ультразвукових коливань. Ця технологія дозволяє не лише отримати чистий інструмент, але й значно прискорити процес обслуговування.',
// 		typeService: 'Очистка',
// 		quattro: 6,
// 		precent: 77
//     },
//     {
//         title: 'CУХАЯ ЧИСТКА ДЕТАЛЕЙ',
//         text: 'Спосіб очистки поверхонь твердих тіл в миючому розчині під впливом ультразвукових коливань. Ця технологія дозволяє не лише отримати чистий інструмент, але й значно прискорити процес обслуговування.',
// 		typeService: 'Шлифовка',
// 		quattro: 1,
// 		precent: 44
//     },
// ]

//  function hundredPrecent(howMuch) { // render white graf
// 	let cpr = $('.compare-grafic');
// 	let divs = `<div class="compare-item"></div>`;
// 	for(let i = 0; i < howMuch; i++) {
// 		cpr.append(divs) }
// }

//  function dinamicPrecent(howMuch) { // render blue graf
// 	let cpr = $('.dinamic-grag');
// 	let divs = `<div class="dinamic-item"></div>`;
// 	for(let i = 0; i < howMuch; i++) {
// 		cpr.append(divs) }
// }


// hundredPrecent(6);
// dinamicPrecent(3);

	// dom targets title, text, blue_grafic 
// var appWrap = $('.wrapper-text-grafic'),
// titile_2 = appWrap.find('.left-text h2'),
// text_2 = appWrap.find('.main-description-presentation'),
// graf_w = appWrap.find('.dinamic-grag')

// $('.but-graf').click(function() { //when click rerender actual data from graficDataList
// 	$('.but-graf').removeClass('actived')



// 	var index = $(this).attr('data-ind')


// 	titile_2.text( grafData[index].title )
// 	text_2.text( grafData[index].text )

// 	TweenMax.fromTo(titile_2, 1, {opacity:0, y:-20},{opacity:1,y:0})
// 	TweenMax.fromTo(text_2, 1, {opacity:0, y:20},{opacity:1,y:0})

// 	$('.dinamic-item').remove()
// 	dinamicPrecent(grafData[index].quattro)




// 	let tma = new TimelineMax();

// 	const scelet = `<div class="stinger">
// 						<div class="type-service"></div>
// 						<div class="grows-precent">+ <span class="grows-precent-target"></span> % </div>
// 					</div>`

// 	tma.staggerFrom('.dinamic-item', 0.3, {opacity:0},0.3);
// 	$('.dinamic-item').last().append(scelet);
// 	tma.staggerTo('.stinger',1, {width: '400px'});

// 	let serv = $('.stinger').find('.type-service');
// 	let prec = $('.stinger').find('.grows-precent-target');
// 	serv.text(grafData[index].typeService);
// 	prec.text(grafData[index].precent);
// 	tma.staggerFrom('.stinger> div',1.4, {x:-10,opacity: 0});


// })


})

