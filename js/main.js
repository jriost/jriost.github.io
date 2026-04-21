(function ($) {
    "use strict";

    // Navbar: class-based scroll behavior (transparent → solid)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('.navbar').addClass('nav-scrolled');
        } else {
            $('.navbar').removeClass('nav-scrolled');
        }
    });

    // Smooth scrolling on navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 70
            }, 1200, 'easeInOutExpo');
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Smooth scroll for hero CTA links
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.hash);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1200, 'easeInOutExpo');
        }
    });

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 80,
            backSpeed: 30,
            smartBackspace: false,
            loop: true
        });
    }

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        $('#videoModal').on('show.bs.modal', function () {
            $("#video").attr('src', $videoSrc);
        });
        $('#videoModal').on('hide.bs.modal', function () {
            $("#video").attr('src', '');
        });
    });

    // Portfolio isotope filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1200, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel (kept for compatibility)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);
