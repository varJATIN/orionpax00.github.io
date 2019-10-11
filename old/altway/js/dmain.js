$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    navText : ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>']
});

$('.active-brand-carusel').owlCarousel({
    loop:true,
    margin:10,
    items:3,
    autoplay:true,
    autoplaySpeed: 1000,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
});

$('.active-testimonial-carusel').owlCarousel({
    loop:true,
    margin:10,
    items:3,
    autoplay:true,
    autoplaySpeed: 1000,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
     navText : ['','']
});