$( window ).scroll(function() {
    if (window.scrollY > 50 ) {
        $('#flecha').removeClass('hide');
    }
    else {
        $('#flecha').addClass('hide');
    }
});