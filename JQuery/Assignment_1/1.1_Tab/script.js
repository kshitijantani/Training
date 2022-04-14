// $(document).ready(function () {
//     $("p.tab1,p.tab2,p.tab3").hide();
//     $("button.tab1").click(function () {
//         $("p.tab3, p.tab2").hide();
//         $("p.tab1").show().css("background-color","lightblue");
//     });
//     $("button.tab2").click(function () {
//         $("p.tab1,p.tab3").hide();
//         $("p.tab2").show().css("background-color","lightpink");
//     });
//     $("button.tab3").click(function () {
//         $("p.tab2,p.tab1").hide();
//         $("p.tab3").show().css("background-color","lightyellow");
//     });
// });

$(document).ready(function () {
    $("p").hide().first().show();
    $("button").click(function () {
        $("p").hide().eq($(this).index()).show();
    });
});


