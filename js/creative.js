(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    // Smart-switching for images in mobile devices
    if(($(window).width()<768) || (($(window).width() < 1028) && ($(window).height() > 1028))) {
      $('header').css('background-image','url(\'./img/bg/mob/1.jpg\')');
      $('.section-heading').css('background-image','url(\'./img/bg/mob/2.jpg\')');
    }

    // Parallax scrolling
    window.onscroll = function(){
      $('.parallax-head').css('background-position','50% '+ ((window.pageYOffset * 0.2)) + 'px');
      $('#our-team').css('background-position','50% '+ ((window.pageYOffset-$('#our-team').position().top) * 0.2) + 'px');
      $('#visit').css('background-position','50% '+ ((window.pageYOffset-$('#visit').position().top) * 0.2) + 'px');
    }

})(jQuery); // End of use strict
