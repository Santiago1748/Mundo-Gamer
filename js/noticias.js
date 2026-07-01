//Efecto de imagenes esports
document.addEventListener('DOMContentLoaded', function () {
    
    var imagenesRebote = document.querySelectorAll('.imagen-rebote');

    imagenesRebote.forEach(function (imagen) {
        imagen.addEventListener('click', function () {
            imagen.classList.add('rebote');

            setTimeout(function () {
                imagen.classList.remove('rebote');
            }, 1000); 
        });
    });
});

//Efecto de imagenes noticias
document.addEventListener('DOMContentLoaded', function () {
    var imagenesDesplazamiento = document.querySelectorAll('.imagen-desplazamiento');

    imagenesDesplazamiento.forEach(function (imagen) {
        imagen.addEventListener('click', function () {
            imagen.classList.add('desplazamiento-desvanecimiento');

            setTimeout(function () {
                imagen.classList.remove('desplazamiento-desvanecimiento');
            }, 2000);
        });
    });
});

//Efecto de imagenes tendencias
document.addEventListener('DOMContentLoaded', function () {
    var imagenesRotacion = document.querySelectorAll('.imagen-rotacion');

    imagenesRotacion.forEach(function (imagen) {
        imagen.addEventListener('mouseenter', function () {
            imagen.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
        });

        imagen.addEventListener('mouseleave', function () {
            imagen.style.boxShadow = 'none';
        });
    });
});

//EFECTO PARA IMAGENES
document.addEventListener('DOMContentLoaded', function () {
    var contenedorImagen3D = document.getElementById('contenedor-imagen-3d');

    contenedorImagen3D.addEventListener('mousemove', function (event) {
        var mouseX = event.clientX - contenedorImagen3D.getBoundingClientRect().left;
        var mouseY = event.clientY - contenedorImagen3D.getBoundingClientRect().top;

        var rotateY = (mouseX / contenedorImagen3D.offsetWidth - 0.5) * 40;

        contenedorImagen3D.style.transform = 'perspective(1000px) rotateY(' + rotateY + 'deg)';
    });

    contenedorImagen3D.addEventListener('mouseleave', function () {
        contenedorImagen3D.style.transform = 'perspective(1000px) rotateY(0deg)';
    });
});

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

