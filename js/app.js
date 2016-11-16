$(function () {

console.log('dziala');

// --- menu list --- //

$(document).ready(function(){
    $("#menu_logo").click(function(){
        $("#menu").stop().slideToggle(300);
    });
});

});
