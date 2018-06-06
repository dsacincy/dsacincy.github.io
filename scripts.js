$(document).ready(function () {

    var setHome = (function () {
        var target = $("div#home.active");
        if (target.length) {
            $("body").addClass("home");
        } else {
            $("body").removeClass("home");
        }
    });

    setHome();

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        setHome();
    });

});