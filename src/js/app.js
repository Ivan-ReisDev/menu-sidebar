// Adiciona a classe 'active' ao link atualmente selecionado
var $btnOpen = document.querySelector("#btn-open");
var $navList = document.querySelector('#nav-list');
var sidebar = false;

function btn(){
    sidebar = !sidebar;
    if(sidebar) {
        $navList.style.transform = "translate(0%)"
    } else {
        $navList.style.transform = ""
    }
}

