let scroll_abort_events = 'scroll.scroller mousedown.scroller wheel.scroller DOMMouseScroll.scroller mousewheel.scroller touchmove.scroller',
    header = $('#nav'),
    scrollContainer = $('html, body');

function addAbortBinding() {
    scrollContainer.on(scroll_abort_events, function () {
        scrollContainer.stop();
        removeAbortBinding();
    });
}

function removeAbortBinding() {
    scrollContainer.off(scroll_abort_events);
}

function scrollToAnchor(event, link) {
    addAbortBinding();

    let offset = header.outerHeight() - 1;

    scrollContainer.stop().animate({
        scrollTop: $(link.attr('href')).offset().top - offset - 20
    }, 2000, 'easeOutQuint', function () {
        removeAbortBinding();
    });

    event.preventDefault();
}

function initScrolling() {
    $('.js-scroll-to-section').on('click', function (event) {
        scrollToAnchor(event, $(this));
        event.preventDefault();
    });
}
