"use strict";

/*
 I'm sorry for this...
 */

$(document).ready(init);

var regEx = /.*#([0-9])$/;

function init() {
    $(window).on("wheel", onScroll);
    $('#next').on("click", next);
    $('#prev').on("click", prev);

    if (isOnFirstPage()) window.location.href += "#1"; //bad!!! Can't wont work!!

    $.fn.extend({
        animateCss: function animateCss(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
}

function onScroll() {
    var element = $('footer div.right').children()[0];
    $(element).animateCss('bounce');
}

function next() {
    var currentPageNr = getPageNr();

    var nextPageNr = ++currentPageNr;
    replaceUrl(nextPageNr);
    $('main div.row.hidden-xs').html(htmlpageCode[nextPageNr]);
    $('main div.row.hidden-xs').animateCss('fadeInUp');
}

function prev() {
    var currentPageNr = getPageNr();
    var prevPageNr = --currentPageNr;
    replaceUrl(prevPageNr);
    $('main div.row.hidden-xs').html(htmlpageCode[prevPageNr]);
    $('main div.row.hidden-xs').animateCss('fadeInUp');
}

function replaceUrl(newPageNr) {
    window.location.href = window.location.href.replace('#' + getPageNr(), '#' + newPageNr);
}

function isOnFirstPage() {
    return !regEx.test(window.location.href);
}

function getPageNr() {
    return Number(window.location.href.match(regEx)[1]);
}

var htmlpageCode = ["<div class=\"col-lg-2 col-md-2 col-sm-2 left\">\n        <p>01</p>\n        <p class=\"linethru\">02</p>\n        <p>03</p>\n        <p>04</p>\n    </div>\n\n    <div class=\"col-lg-4 col-lg-offset-2 col-md-8 col-sm-8 center\">\n        <h2>Ord & Bild Reklambyrå Praktik/Lärande i Arbete (LIA)</h2>\n        <p class=\"middletextsmall\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            Karlstad <i class=\"fa fa-circle\" aria-hidden=\"true\"></i> Yrkeserfarenhet <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n            Oktober 2012-Januari 2016</p>\n    </div>", "  <div class=\"col-lg-2 col-md-2 col-sm-2 left\">\n            <p>01</p>\n            <p class=\"linethru\">02</p>\n            <p>03</p>\n            <p>04</p>\n        </div>\n    \n        <div class=\"col-lg-4 col-lg-offset-2 col-md-8 col-sm-8 center\">\n            <h2>Ord & Bild Reklambyrå Praktik/Lärande i Arbete (LIA)</h2>\n            <p class=\"middletextsmall\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                Karlstad <i class=\"fa fa-circle\" aria-hidden=\"true\"></i> Yrkeserfarenhet <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                Oktober 2012-Januari 2016</p>\n        </div>", "  <div class=\"col-lg-2 col-md-2 col-sm-2 left\">\n            <p>01</p>\n            <p>02</p>\n            <p class=\"linethru\">03</p>\n            <p>04</p>\n        </div>\n\n        <div class=\"col-lg-4 col-lg-offset-2 col-md-8 col-sm-8 center\">\n            <h2>Mediart Reklambyrå <br/> Praktik/Lärande I Arbete(LIA)</h2>\n            <p class=\"middletextsmall\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                Göteborg <i class=\"fa fa-circle\" aria-hidden=\"true\"></i> Yrkeserfarenhet <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                April 2015-Juni 2015</p>\n        </div>", "  <div class=\"col-lg-2 col-md-2 col-sm-2 left\">\n            <p>01</p>\n            <p>02</p>\n            <p>03</p>\n            <p class=\"linethru\">04</p>\n        </div>\n    \n        <div class=\"col-lg-8 col-md-8 col-sm-8 center\">\n            <h2>Jhon Bauergymnasiet<br/> Estetik & Media Estetik & Media Estetik & Media </h2>\n            <p class=\"middletextsmall\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                Karlstad <i class=\"fa fa-circle\" aria-hidden=\"true\"></i> Yrkeserfarenhet <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                Augusti 2011-Juni 2014</p>\n        </div> ", "  <div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 center\">\n            <h2>\n                Rosor är röda, violer är blå.<br/>\n                Har du möjligtvis en <span class=\"underline\">heltidstjänst inom reklam-<br/>\n                branschen i Stockholm</span> som jag kan få kika på?\n            </h2>\n        </div>", " <div class=\"col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 center\">\n        <h2>Lite om mig</h2>\n        <p class=\"middletextsmall\">Naturen ligger mig varmt om hjärtat då jag är både född och uppvuxen i de\n            djupa\n            värmländska skogarna, tillsammans med tre systrar och två päron till föräldrar.\n            Efter högstadiet flyttade jag till Karlstad och har bott här under mina fem år som\n            studerande men vill testa på en ny stad.\n            <br />\n            <br />\n            Att arbeta skapande har alltid varit ett stort intresse. Jag älskar framförallt att\n            skapa från grunden men också att förbättra det redan befintliga som kanske inte\n            nått hela vägen fram men som har stor potential.</p>\n    </div> "];

//# sourceMappingURL=script.js.map