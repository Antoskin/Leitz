import {slick} from 'slick-carousel'

export default function() {
    $('.slider-fill-result').slick({
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
      let hh = $('.slick-slide').find('h4'),
          pp = $('.slick-slide').find('p'),
          target_chenj = $('.wrap_image_f_slider'),
          target_img_chej = $('.wrap_image_f_slider img')
    
      $('.slick-dots li').click( function() {

        let for_change_img = $(`.slick-current .slide-imager`).attr(`src`);
        setTimeout( () => {
          target_img_chej.attr(`src`,for_change_img)
        },500 )
        

        

        TweenMax.to(hh, 0.1 ,{ x:'-20', opacity:'0' })
        TweenMax.to(hh, 1 ,{ x:'0', opacity:'1' }).delay(0.5)
    
        TweenMax.to(pp, 0.1 ,{ y:'-20', opacity:'0' })
        TweenMax.to(pp, 1 ,{ y:'0', opacity:'1' }).delay(0.5)
    
        TweenMax.to(target_chenj, 1 ,{ x: -485, y: 270, ease: Expo.easeOut })
        TweenMax.to(target_chenj, 1 ,{ x: 0, y: 0, ease: Expo.easeOut }).delay(1)
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

}