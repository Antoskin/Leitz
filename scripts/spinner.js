
export default function () {
  var rotationSnap = 45;
  Draggable.create("#knob", {
      type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
      throwProps:true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
      bounds: { minRotation: 0, maxRotation: -360 },
      snap:function(endValue) { 
          let result = Math.round(endValue / rotationSnap) * rotationSnap;
          // if( result % 360 == 0 || result % 180 == 0  ) {
          //   $('.b').removeClass('active');
          //   $( '.b-first, .b-fifth' ).addClass('active');
          // }
          // else if( result % 90 == 0 ) {
          //   $('.b').removeClass('active');
          //   $('.b-third, .b-seventh').addClass('active');
          // }
          if( result == -360 || result == '' ) { 
            $('.b').removeClass('active')
            $( '.b-first').addClass('active') }
          else if( result == -45) { 
              $('.b').removeClass('active')
              $( '.b-second').addClass('active') }
          else if( result == -90 ) { 
                $('.b').removeClass('active')
                $( '.b-third').addClass('active') }
          else if( result == -135 ) { 
                  $('.b').removeClass('active')
                  $( '.b-firth').addClass('active') }
          else if( result == -180 ) { 
                    $('.b').removeClass('active')
                    $( '.b-fifth').addClass('active') }
          else if( result == -225 ) { 
                      $('.b').removeClass('active')
                      $( '.b-sixth').addClass('active') }
          else if( result == -270 ) { 
                        $('.b').removeClass('active')
                        $( '.b-seventh').addClass('active') }
          else if( result == -315 ) { 
                          $('.b').removeClass('active')
                          $( '.b-eight').addClass('active') }
          else {
              $('.b').removeClass('active')
              $( '.b-first').addClass('active') 
          }
      
          console.log(result);
          return result
      }
  
  })
  
}