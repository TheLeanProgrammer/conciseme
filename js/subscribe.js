$(document).ready(function () {
    setTimeout(function () {
        $('.subs-box').css({
            'bottom': '0'
        });
    }, 700);

    $('.cross').on('click', function () {
        $('.subs-box').css({
            'bottom': '-305px'
        });
    });

    $('.subs-box').mouseover(function () {
        $('.subs-box').css({
            'bottom': '0'
        });
    });

    $('.subs-box').mouseleave(function () {
        $('.subs-box').css({
            'bottom': '-305px'
        });
    });
});