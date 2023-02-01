let width = screen.width;

if(width <= 768){
    document.getElementById('header-menu-list').classList.add('hidden')
}

function showMenu(showMenu){
    if(showMenu){
        document.getElementById('header-menu-list').classList.remove('hidden')
    }else{
        document.getElementById('header-menu-list').classList.add('hidden')
    }
}