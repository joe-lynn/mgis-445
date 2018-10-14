$('#featuredCarousel').carousel({
    interval: 10000
});

$('#kitchenCarousel').carousel({
    interval: 10000
});

$('#officeCarousel').carousel({
    interval: 10000
});

$('#homeCarousel').carousel({
    interval: 10000
});

$('#cleaningCarousel').carousel({
    interval: 10000
});

$('#bedroomCarousel').carousel({
    interval: 10000
});

$('#bathCarousel').carousel({
    interval: 10000
});

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

$("img").click(function(){
    window.location.replace("pages/product.html");
});







$("#submit").click(function(e) {
    e.preventDefault();
    $('#form-response').removeClass('d-none');
    $('.contact-form').hide();
    });