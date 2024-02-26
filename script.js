let menuVisible = false;

function mostrarOcultarMenu () {
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.contenedor-header header');
    if (window.scrollY > 100) {
        header.classList.add('fixed');
        header.classList.remove('transparent');
    } else {
        header.classList.remove('fixed');
        header.classList.add('transparent');
    }
});

//Response del back

