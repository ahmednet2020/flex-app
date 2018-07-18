/*global $, console, document, window, localStorage,alert */
$(function () {
    $("li").on("click", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    var $x = $(".buttonnumber").children().length,
        i = 5;

    $(".arowright").on("click", function () {
        if (i < $x) {
            $(".buttonnumber label").first().animate({
                "margin-left": "+=-20%"
            });
            i += 1;
        }
    });
    $(".arowleft").on("click", function () {
        if (i > 5) {
            $(".buttonnumber label").first().animate({
                "margin-left": "+=+20%"
            });
            i -= 1;
        }
    });

    $(".buttonnumber label").on("click", function () {
        $(this).addClass("pageview").siblings().removeClass("pageview");
    });
});




