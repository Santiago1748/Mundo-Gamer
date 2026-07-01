
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


//efectis botones
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


var Conocenos = document.getElementsByClassName('Conocenos');

function rotacion(event) {
    event.target.style.transition = 'all 1s';
    event.target.style.transform = 'rotateZ(360deg)';
}

function sinrotacion(event) {
    event.target.style.transition = 'all 0s';
    event.target.style.transform = 'rotateZ(0deg)';
}

for (let i = 0; i < Conocenos.length; i++) {
    Conocenos[i].addEventListener('mouseenter', rotacion);
    Conocenos[i].addEventListener('mouseleave', sinrotacion);
}

//EFECTO CARRUSEL BANNERHO

var imgs=new Array(4);

imgs[0]="../imagenes/bannerho.png";
imgs[1]="../imagenes/codmw.png";
imgs[2]="../imagenes/arcade9.jpg";
imgs[3]="../imagenes/aventura1.jpg";
imgs[4]="../imagenes/aventura2.jpg";
imgs[5]="../imagenes/aventura3.jpg";

var c=0;
setInterval(promocion,2500);

function promocion() {
    c++;
    if(c>=imgs.length) c=0;
    document.getElementById("bannerho").src=imgs[c];
}