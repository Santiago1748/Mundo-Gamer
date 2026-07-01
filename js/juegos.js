//AUMENTAR TAMAÑO DE LAS LETRAS

var botones = document.getElementsByClassName('botones');

function aumentar(event) {
    event.target.style.transform = 'scale(1.2)';
}

function restaurar(event) {
    event.target.style.transform = 'scale(1)';
}

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('mouseenter', aumentar);
    botones[i].addEventListener('mouseleave', restaurar);
}
    
//EFECTO ROTACIÓN DE LAS IMAGENES

var juegos = document.getElementsByClassName('juegos');

function rotacion(event) {
    event.target.style.transition = 'all 1s';
    event.target.style.transform = 'rotateY(360deg)';
}

function sinrotacion(event) {
    event.target.style.transition = 'all 0s';
    event.target.style.transform = 'rotateY(0deg)';
}

for (let i = 0; i < juegos.length; i++) {
    juegos[i].addEventListener('mouseenter', rotacion);
    juegos[i].addEventListener('mouseleave', sinrotacion);
}
 
//EFECTO PROMOCIÓN

    var imgs=new Array(4);

    imgs[0]="../imagenes/ps promo.png";
    imgs[1]="../imagenes/propaganda.png";
    imgs[2]="../imagenes/Blue Minimalist Birthday Photo Collage.jpg";
    imgs[3]="../imagenes/accesorios_01.png";

    var c=0;
    setInterval(promocion,2500);

    function promocion() {
        c++;
        if(c>=imgs.length) c=0;
        document.getElementById("promo").src=imgs[c];
    }

//EFECTO GRIS LOGOS DE REDES SOCIALES

    var sociales = document.getElementsByClassName("sociales");
    var facebook = document.getElementsByClassName("facebook");

    function ocultar(event) {
        event.target.style.filter = "grayscale(90%)";
    }

    function ver(event) {
        event.target.style.filter = "grayscale(0%)";
    }

    for (let i = 0; i < sociales.length; i++) {
        sociales[i].addEventListener('mouseover', ocultar);
        sociales[i].addEventListener('mouseout', ver);
        facebook[i].addEventListener('mouseover', ocultar);
        facebook[i].addEventListener('mouseout', ver);
    }
