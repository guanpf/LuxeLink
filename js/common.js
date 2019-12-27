
function showMenu() {
    var TabList = document.getElementById("tabList")
    var slideBar = document.getElementById("slideBar")
    console.log(slideBar,TabList)
    slideBar.style.display = 'block'
}

function hideMenu() {
    var slideBar = document.getElementById("slideBar")
    slideBar.style.display = 'none'
}

$(document).ready(function() {
    var slideBar = document.getElementById("slideBar")
    slideBar.style.display = 'none'
//     var trigger = $('.hamburger'),
//         overlay = $('.overlay'),
//         isClosed = false;
//     trigger.click(function() {
//         hamburger_cross();
//     });
//     function hamburger_cross() {
//         if (isClosed == true) {
//             overlay.hide();
//             trigger.removeClass('is-open');
//             trigger.addClass('is-closed');
//             isClosed = false;
//         } else {
//             overlay.show();
//             trigger.removeClass('is-closed');
//             trigger.addClass('is-open');
//             isClosed = true;
//         }
//     }
//     $('[data-toggle="offcanvas"]').click(function() {
//         $('#wrapper').toggleClass('toggled');
//     });
});