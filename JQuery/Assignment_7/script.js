var count_parent = 0;
$(document).ready(function(){

    // add parent on webpage
    $('.btn-addMore').click(function(){
        $('.addRows').append(`
        <div class="first-box">
            <input type="text" id='parent' placeholder="Title">
            <button class='add-child' type="button">Add Child</button>
            <button class='submit-child' type="button">Submit</button>
            <<button class='delete-child' type="button">Delete</button>
        </div>` )
    });

})

// add child to the parent box
$(document).on('click', '.add-child', function(){
    var index = $(this).parents('div').index();
    // var index = $(".addRows ").index($(this));
    $('.first-box').eq(index).append(`
    <div class='child-details'>
    <input type='text id='child-subtitle' placeholder='Subtitle'>
    <input type='text id='child-value' placeholder='Value'>
    <button class='delete-details' type="button">Delete</button></div>
    `);
   
})
