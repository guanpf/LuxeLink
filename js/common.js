
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
//点击折叠时运行该函数
    $('.collapse').on('hide.bs.collapse show.bs.collapse', function (e) {
        e.stopPropagation()
        var $this = $(this)

        $this.prev('.question-tittle').find("span").toggleClass("span_plus");
        $this.prev('.question-tittle').find("span").toggleClass("span_reduce");
    });
});

