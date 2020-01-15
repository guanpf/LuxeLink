
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

// 显示/隐藏头部下拉栏目
function showTitleSelect(num){
    // console.log(num)
    $('#tittleSelect').toggleClass('show')
    $('#tittleSelect').toggleClass('noshow')
    $('#tittleSelect ul li').find("span").removeClass('menu-active')
    $('#tittleSelect ul li').eq(num).find("span").addClass('menu-active')

}


$(document).ready(function() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 750*100 + 'px';
//点击折叠时运行该函数
    $('.collapse').on('hide.bs.collapse show.bs.collapse', function (e) {
        e.stopPropagation()
        var $this = $(this)
        $this.prev('.question-tittle').find("span").toggleClass("span_plus");
        $this.prev('.question-tittle').find("span").toggleClass("span_reduce");

        $this.prev('.menu-question-tittle').find("span").toggleClass("span_plus");
        $this.prev('.menu-question-tittle').find("span").toggleClass("span_reduce");
    });
    $('.receiveCheck').click(function () {
        if($(this).attr('src')=='../../images/mobile/public/receive_no.png'){
            $(this).attr('src','../../images/mobile/public/receive_set.png');
        }else{
            $(this).attr('src','../../images/mobile/public/receive_no.png');
        }
    })
    $('.rememberCheck').click(function () {
        if($(this).attr('src')=='../../images/mobile/public/remember_no.png'){
            $(this).attr('src','../../images/mobile/public/remember_set.png');
        }else{
            $(this).attr('src','../../images/mobile/public/remember_no.png');
        }
    })
    $('.changeType').click(function () {
        let text = 'show'
        if($(this).prev('.password-label').attr("type")=='password'){
            $(this).prev('.password-label').attr('type','text')
            text = 'hide'
            $(this).html(text)
        }else{
            $(this).prev('.password-label').attr('type','password')
            text = 'show'
            $(this).html(text)
        }
    })
});

