// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }

$(document).ready(function() {
    $("#js-shopping-list-form").on('submit', function(e){
      	let text = $('#shopping-list-entry').val();
        let buttonLabelOpen ='<span class="shopping-item">'
        let buttonLabelClose = '</span>';
        let itemControls= '<div class="shopping-item-controls">'
            + '<button class="shopping-item-toggle">'
            + '<span class="button-label">check</span>'
            + '</button>'
            + '<button class="shopping-item-delete">'
            + '<span class="button-label">delete</span>'
            + '</button> </div>';

        $('.shopping-list').append('<li>' + buttonLabelOpen + text + buttonLabelClose + itemControls + '</li>');
        e.preventDefault();
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();

});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

    })
});
