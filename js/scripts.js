$(document).ready(function() 
{
  /* activate scrollspy menu */
  $('body').scrollspy
  ({
    target: '.navbar',
    offset: 52
  });

// For the scroll chaning active - Scrollspy was being annoying, made my own
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  var s1os = $('#section1').offset().top;
  var s2os = $('#section2').offset().top;
  var s3os = $('#section3').offset().top;
  var s4os = $('#section4').offset().top;

  var s1ht = $('#section1').height();
  var s2ht = $('#section2').height();
  var s3ht = $('#section3').height();
  var s4ht = $('#section4').height();
  if(scroll == 0)
  {
    $('#s1li').addClass('active');
    $('#s2li').removeClass('active');
    $('#s3li').removeClass('active');
    $('#s4li').removeClass('active');
  }
  if(scroll > s1os + s2ht)
  {
    $('#s1li').removeClass('active');
    $('#s2li').addClass('active');
    $('#s3li').removeClass('active');
    $('#s4li').removeClass('active');
  }
  if(scroll > s2os + s3ht)
  {
    $('#s1li').removeClass('active');
    $('#s2li').removeClass('active');
    $('#s3li').addClass('active');
    $('#s4li').removeClass('active');
  }
    if(scroll > s3os + s4ht)
  {
    $('#s1li').removeClass('active');
    $('#s2li').removeClass('active');
    $('#s3li').removeClass('active');
    $('#s4li').addClass('active');
  }

});

/*scrollspy helper, goes to the section on button press*/
$(function() 
{
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*animate function*/
$.fn.extend({
  animateCss: function(animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(this).addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});


    var updating = true; //update bool
    var thePage; //timeout var
    var theInterval = 1000; //update interval
    var updateCountSec = 0;

    update();



    /*update function when needed*/
    function update() 
    {
      if (updating) {
        //make flash every x secs
        if(updateCountSec % 5 == 0){
          $('#mainCap').animateCss('pulse');
        }
        updateCountSec++;
        thePage = setTimeout(update, theInterval);
      } 
    }


    $("#flip").click(function() 
    {
      $("#panel").slideToggle("slow");
    });


    /*makes enter send form*/
    $('#loginForm input').keydown(function(e) 
    {
      if (e.keyCode == 13) {
        $('#loginForm').submit();
      }
    });


    /*cheeky logo animation*/
    $("#logo").hover(function() 
    {
      $('#logo').animateCss('bounce');
    })


    $('#flip').click(function() 
    {
      $(this).animateCss('rubberBand');
    });

    /*portfolio swap code*/
    $('.thumbs img').click(function() 
    {
      var vidLinker = this.getAttribute("data-vid");
        // Really odd way i made up to actually get the item that is associated with the actual image
        // i stored a number in the alt tag which corrosponds to which item/image ect it is
        // concatinating this lets me get the associated title/image
        var theAlt = this.alt;
        var toGet = document.getElementById("image1").src;
        var meImg = document.getElementById('image' + theAlt);
        var meItem = document.getElementById('item' + theAlt);
        var meMod = document.getElementById('module' + theAlt);
        var meDesc = document.getElementById('desc' + theAlt);
        var meFig = document.getElementById('fig' + theAlt);
        /*  $(this).delay(100).queue(function() {*/
        /*  $(meImg).fadeTo(700,0);
          $(meItem).fadeTo(700,0);
          $(meMod).fadeTo(700,0);
          $(meDesc).fadeTo(700,0);
          $(".mainDisplay").fadeTo(700,0, function() { */
            $("#item1").css("background-image", "url(" + this.src + ")");
            document.getElementById("image1").src = document.getElementById('image' + theAlt).src;
            document.getElementById('image' + theAlt).src = toGet;
            toGet = $("#fig1").css("background-image");
            $("#fig1").css("background-image", $(meFig).css('background-image'));
            $(meFig).css('background-image', toGet);
            toGet = document.getElementById("item1").innerHTML; 
            document.getElementById("item1").innerHTML = document.getElementById('item' + theAlt).innerHTML;
            document.getElementById('item' + theAlt).innerHTML = toGet;
            toGet = document.getElementById("module1").innerHTML;
            document.getElementById("module1").innerHTML = document.getElementById('module' + theAlt).innerHTML;
            document.getElementById('module' + theAlt).innerHTML = toGet;
            toGet = document.getElementById("desc1").innerHTML;
            document.getElementById("desc1").innerHTML = document.getElementById('desc' + theAlt).innerHTML;
            document.getElementById('desc' + theAlt).innerHTML = toGet;
            toGet = document.getElementById("descLong1").innerHTML;
            document.getElementById("descLong1").innerHTML = document.getElementById('descLong' + theAlt).innerHTML;
            document.getElementById('descLong' + theAlt).innerHTML = toGet;
            toGet = document.getElementById("link1").innerHTML;
            document.getElementById("link1").innerHTML = document.getElementById('link' + theAlt).innerHTML;
            document.getElementById('link' + theAlt).innerHTML = toGet;
            toGet = document.getElementById("link1").href;
            document.getElementById("link1").href = document.getElementById('link' + theAlt).href;
            document.getElementById('link' + theAlt).href = toGet;
            toGet = document.getElementById("date1").innerHTML;
            document.getElementById("date1").innerHTML = document.getElementById('date' + theAlt).innerHTML;
            document.getElementById('date' + theAlt).innerHTML = toGet;
            toGet = document.getElementById("vidLink1").href;
            document.getElementById("vidLink1").href = document.getElementById('vidLink' + theAlt).href;
            document.getElementById('vidLink' + theAlt).href = toGet;
            toGet = document.getElementById("vidLink1").innerHTML;
            document.getElementById("vidLink1").innerHTML = document.getElementById('vidLink' + theAlt).innerHTML;
            document.getElementById('vidLink' + theAlt).innerHTML = toGet;
        /*    $(meImg).fadeTo(500,1);
            $(meItem).fadeTo(500,1);
            $(meMod).fadeTo(500,1);
            $(meDesc).fadeTo(500,1);
            $(".mainDisplay").fadeTo(500,1);*/
        /*
      });*/
    });


    // allows user to interrupt scrolling. Can be annoying.
    $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(e) {
      if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
            $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup'); // This identifies the scroll as a user action, stops the animation, then unbinds the event straight after (optional)
          }
        });
    $( ".mainPic" )


    .on( "mouseenter", function() 
    {
      $('#mainCap').fadeTo(300,0);
    })


    .on( "mouseleave", function() 
    {
      $('#mainCap').fadeTo(300,0.5);
    });


    $(".navbar-brand").hover(function()
    {
      $(this).animateCss('tada');
    });


    /*on modal close*/
    $('#myModal2').on('hidden.bs.modal', function () 
    {
      var video = $("#trailer").attr("src");
      $("#trailer").attr("src","");
    })


    /*on modal shown*/
    $('#myModal2').on('shown.bs.modal', function () 
    {
      var video = $("#trailer").attr("src");
      $("#trailer").attr("src","https://www.youtube.com/embed//Md_RRtVC3-E?autoplay=1");
    })


    $("[rel='tooltip']").tooltip();    
    $('.hovereffect').hover(
      function(){
            $(this).find('.overlay').slideDown(250); //.fadeIn(250)
          },
          function(){
            $(this).find('.overlay').slideUp(250); //.fadeOut(205)
          }
          ); 
    
    /*document ready end*/
  });