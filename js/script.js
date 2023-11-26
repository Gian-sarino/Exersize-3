
var images = $('li img');

images.hide().first().show();

var currentImageIndex = 0;

$('body').click(function() {
    $(images[currentImageIndex]).hide();

    currentImageIndex = (currentImageIndex + 1) % images.length;

    $(images[currentImageIndex]).show();
    
});

