$(document).ready( function() {
    // console.log('!a');

    $('#slider-wrap').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
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


    //   sec slider
    $('#team-slider').slick({
        prevArrow:"</span><img class='a-left control-c prev slick-prev' src='../img/left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='../img/left.png'>",
        // centerMode: true,
        // centerPadding: '200px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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



      function headSVG() {

        let owl1 = $('.circle1'),
            owl2 = $('.circle2'),
            owl3 = $('.circle-little'),
            l1 = $('.line1'),
            l2 = $('.line2');
            l3 = $('.line2little'),
            lv1 = $('.line-vert1'),
            lv2 = $('.line-vert2')

            TweenMax.fromTo(owl1, 1, {
              opacity:'0',
              drawSVG:'0'
            },
          {
            opacity:'1',
            drawSVG:'100%'
          })


      }
      headSVG();


} )