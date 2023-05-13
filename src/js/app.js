// Adiciona a classe 'active' ao link atualmente selecionado
var $btnOpen = document.querySelector("#btn-open");
var $navList = document.querySelector('#nav-list');
var $icon = document.getElementById('icon');
var sidebar = false;

function btn(){
    sidebar = !sidebar;
    if(sidebar) {
        $navList.style.transform = "translate(0%)";
        $icon.classList.toggle("fa-bars")
        $icon.classList.toggle("fa-xmark")
    } else {
        $navList.style.transform = ""
        $icon.classList.toggle("fa-xmark")
        $icon.classList.toggle("fa-bars")
        
    }
}

