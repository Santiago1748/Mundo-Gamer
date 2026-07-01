

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


document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll('.IMG');

    imagenes.forEach(function(imagen) {
        imagen.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7'; 
            this.style.transition = 'opacity 0.3s ease'; 
        });

        imagen.addEventListener('mouseleave', function() {
            this.style.opacity = '1'; 
            this.style.transition = 'opacity 0.3s ease'; 
        });
    });
});

