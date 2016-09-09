/*
 I'm sorry for this...
 */


$(document).ready(init);

function init() {
    $(window).on("wheel", onScroll);

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
}

function onScroll() {
    var element = $('footer div.right').children()[0];
    $(element).animateCss('bounce');
}