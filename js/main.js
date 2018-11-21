var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
         console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "https://0gb8v1l3e7.execute-api.us-east-1.amazonaws.com/catalog/catalog/", true);
xhttp.send();


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