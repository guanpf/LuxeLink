
function showMenu() {
    var menu = document.getElementById("menu")
    menu.style.display = 'block'
}

function hideMenu() {
    var menu = document.getElementById("menu")
    menu.style.display = 'none'
}

function toSecondMenu(str){
    var menu = document.getElementById("menu")
    menu.style.display = 'none'
    var secondMenu = document.getElementById("secondMenu")
    secondMenu.style.display = 'block'
}

function backMainMenu(){
    var secondMenu = document.getElementById("secondMenu")
    secondMenu.style.display = 'none'
    var menu = document.getElementById("menu")
    menu.style.display = 'block'
}

$(document).ready(function() {

});