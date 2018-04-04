import {slick} from 'slick-carousel'

export default function() {
    $('#slider-wrap').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // transitions
      var hh = $('.slick-slide').find('h2');
      var pp = $('.slick-slide').find('p');
      //TweenMax.from(hh,2,{ opacity:'0' })
      var ii = $('.right-slider-side img')
    
      $('.slick-dots li').click( function() {
        TweenMax.to(hh, 0.1 ,{ y:'20', opacity:'0' })
        TweenMax.to(hh, 1 ,{ y:'0', opacity:'1' }).delay(0.5)
    
        TweenMax.to(pp, 0.1 ,{ y:'-20', opacity:'0' })
        TweenMax.to(pp, 1 ,{ y:'0', opacity:'1' }).delay(0.5)
    
        //TweenMax.to(ii, 0.1 ,{scale:0.3, opacity:'0' })
        // TweenMax.to(ii, 1 ,{ scale:'1', opacity:'1' }).delay(0.5)
      } ) 



    //   TEAM
    $('#team-slider').slick({
        prevArrow:"</span><img class='a-left control-c prev slick-prev' src='../img/left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='../img/left.png'>",
        // centerMode: true,
        // centerPadding: '200px',
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        // fade: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      let but = $('.team-button');
      
        but.click( function() {
          
          let curBut = $(this);
          let curTeam = curBut.parents('.item-team');
          TweenMax.to(curTeam, 0.5, { opacity:0 })
          TweenMax.to('.item-team', 0.5, { opacity:0 }).delay(0.3);
          
          TweenMax.fromTo('#team-slider',1,{y: -20}, {opacity:1, y:0,zIndex:100}).delay(1.5);
          if( curBut.hasClass('tima2') ) {
            // $('#team-slider .slick-dots li:eq(1)').click();
          } else if(curBut.hasClass('tima3')) {
            $('#team-slider .slick-dots li:eq(2)').click();
          } else if(curBut.hasClass('tima4')) {
            $('#team-slider .slick-dots li:eq(3)').click();
          }
          console.log('Group of team choise')
      })
}