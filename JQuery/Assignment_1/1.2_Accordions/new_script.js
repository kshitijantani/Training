$(document).ready(function(){
    $('p').hide().first().show();
    $('button').on('click', function(){
        var customIndex = $(this).index()
        $('.content').children().hide().eq(customIndex).slideDown();
        console.log()
    })
    
})