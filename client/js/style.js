$(document).ready(function() {
  $(window).on( "load", function() {
    $(".welcome").textillate({
            initialDelay: 0,
            autoStart: true,
            in: { effect: 'fadeInUpBig',
                  shuffle: true,
                  delay: 60
                },
        });

        $("#enterbtn").textillate({
          loop: true,
          autoStart: true,
          in: { effect: 'flash',
                delayScale: 2.5,
              },
          out: { effect: 'flash',
                delayScale: 2.5,
              }
        });

        $(".quote").textillate({
          loop: true,
          autoStart: true,
          minDisplayTime: 4000,
          in: { effect: "rollIn",
                shuffle: true,
                delay: 40,
              },
          out: { effect: "hinge",
                 shuffle: true,
                 delay: 60,
          }
        });
  })
//     $(".welcome").textillate({
//         initialDelay: 0,
//         autoStart: true,
//         in: { effect: 'fadeInUpBig',
//               shuffle: true,
//               delay: 60
//             },
//     });
//
//     $("#enterbtn").textillate({
//       loop: true,
//       autoStart: true,
//       in: { effect: 'flash',
//             delayScale: 2.5,
//           },
//       out: { effect: 'flash',
//             delayScale: 2.5,
//           }
//     });
//
//     $(".quote").textillate({
//       loop: true,
//       autoStart: true,
//       minDisplayTime: 4000,
//       in: { effect: "rollIn",
//             shuffle: true,
//             delay: 30,
//           },
//       out: { effect: "hinge",
//              shuffle: true,
//       }
//     });

    $(window).scroll(function(){
      if ($(this).scrollTop()>1){
        $("nav").addClass('opacity');
      }
      else {
        $("nav").removeClass('opacity');
      }
    });
});
