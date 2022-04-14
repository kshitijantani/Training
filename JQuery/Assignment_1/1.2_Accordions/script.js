$(document).ready(function () {
    $("p").hide().first().show();
    $("button").click(function () {
        $("p").slideUp(function(){
            if (!$("p").is(':visible')){
                $(this).parent().find("button i").removeClass("fa fa-caret-down").addClass("fa fa-caret-right");
            }
        });
        $(this).parents().siblings().find("i").removeClass("fa fa-caret-right").removeClass("fa fa-caret-down").addClass("fa fa-caret-right");
        $(this).find("i").removeClass("fa fa-caret-right").addClass("fa fa-caret-down");
        $(this).siblings("p").show();
    });
});