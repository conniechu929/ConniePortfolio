
app.controller('portfolioController', ['$scope','portfolioFactory', '$location', '$anchorScroll', function($scope, portfolioFactory, $location, $anchorScroll) {

    $("nav").hover(function() {
      $("nav").removeClass('opacity');
    });

    $('.carousel').carousel({
      interval: 3000
    })

    $("#FoodFind").click(function() {
      $(".foodSummary").toggle("slow");
    });

    $("#bills").click(function() {
      $(".billsummary").toggle("slow");
    });

    $("#park").click(function() {
      $(".parksummary").toggle("slow");
    });

    $("#FoodFind").mouseenter(function() {
      $("#FoodFind").addClass('color');
    }).mouseleave(function() {
      $("#FoodFind").removeClass('color');
    });

    $("#bills").mouseenter(function() {
      $("#bills").addClass('color');
    }).mouseleave(function() {
      $("#bills").removeClass('color');
    });

    $("#park").mouseenter(function() {
      $("#park").addClass('color');
    }).mouseleave(function() {
      $("#park").removeClass('color');
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 40) {
        $(".title").fadeOut("slow");
      }
      else {
        $(".title").fadeIn("slow")
      }
    });
    // var playVid;
    // function startVideo() {
    //   playVid = document.getElementById('vid1');
    //   // playVid.play();
    //   document.addEventListener('touchstart', function(event) {
    //     playVid.play();
    //   }, false);
    // }

    // $('video').each(function () {
    //   enableInlineVideo(this);
    // });
    // $('video').on('touchstart', function(){
    //   $(this).play();
    // })

    var video = document.querySelector('video');
    // enableInlineVideo(video);
    if(video){
      console.log('LOLO2');
      video.addEventListener('touchstart', function () {
        video.play();
      });
    }



  $scope.welcome = function() {
    $location.hash('welcomePage');
    $anchorScroll();
    $location.hash('');
  };

  $scope.AboutMe = function() {
    $location.hash('about');
    $anchorScroll();
    $location.hash('');
  };
  $scope.myProjects = function() {
    $location.hash('projects');
    $anchorScroll();
    $location.hash('');
  }
  $scope.myContact = function() {
    $location.hash('contact');
    $anchorScroll();
    $location.hash('');
  }

}]);
