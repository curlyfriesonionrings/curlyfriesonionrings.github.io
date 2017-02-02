(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
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
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

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
    
    // Set up carousel
//    $('#carousel').carousel({wrap: true, interval: false});
    
    var message = "";
        
    $("#submitForm").on("click", function () {
        var $contactForm = $('#contactForm');
        message = $contactForm.serialize();
        $.ajax({
            url: "//formspree.io/contact@paalit.com",
            method: "POST",
            data: { message: message },
            dataType: "json",
            success: function (data) {
                $contactForm.find('.alert-success').hide();
                $contactForm.find('.alert-error').hide();
                $contactForm.append('<div class="alert alert-success">Thanks for the email! We\'ll be in touch soon.</div>');
            },
            error: function (err) {
                $contactForm.find('.alert-success').hide();
                $contactForm.find('.alert-error').hide();
                $contactForm.append('<div class="alert alert-error">Oops! There was a problem! Please try again later.</div>');
            }
        });
        return false;
    });
    
})(jQuery); // End of use strict