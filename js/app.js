$(function () {

console.log('dziala');

// --- menu list --- //
/*
console.log('menu_list');

$(document).ready(function(){
    $("#menu_logo").click(function(){
        $("#menu").stop().slideToggle(300);
    });
});
*/

// --- dropdownmenu --- //

var div = document.querySelector('#menu_logo');
    console.log(div);

    div.addEventListener('click', function() {
        var list = document.querySelector('.menu-content');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }
    });


});
