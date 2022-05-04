$(document).ready(function () {
    $("p").hide().first().show();
    $("button").click(function () {
        $("p").hide().eq($(this).index()).show();
    });
});


