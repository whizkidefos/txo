AOS.init();

//Navigation and Carousel Content Toggle
$(function() {

    $('.burger').click(function() {
        $('.burger').toggleClass('open');
        $('.nav-links').slideToggle();
        $('.nav-links').removeClass('slide-in-top');
    });

    $('.read-more').click(function() {
        $('.location, .size, .details').slideDown();
        $('.read-more').hide();
        $('.hide-text').show();
    });

    $('.hide-text').click(function() {
        $('.location, .size, .details').slideUp();
        $('.read-more').show();
        $('.hide-text').hide();
    });

    $('.carousel-slide.swiper-slide > img').mouseenter(function() {
        $('.carousel-button-prev').fadeIn();
        $('.carousel-button-next').fadeIn();
    });
});

//Carousel
const carousel = new Swiper ('.carousel', {
    loop: true,
    speed: 1200,
    grabCursor: true,
    slidesPerView: 1,
    allowTouchMove: true,
    autoplay: {
        delay: 5000
    },
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.carousel-button-next',
        prevEl: '.carousel-button-prev',
    }
});
