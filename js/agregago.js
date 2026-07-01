/*7/05/2024*/ 
const carrito = document.getElementById('carrito');
const lista = document.getElementById('lista-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

// Variable para controlar la visibilidad del carrito
let carritoVisible = false;

// Agregar evento de clic al documento para controlar la visibilidad del carrito
document.addEventListener('click', toggleCarrito);

// Función para alternar la visibilidad del carrito
function toggleCarrito(e) {
    if (e.target.id === 'mostrar-carrito') {
        // Si se hace clic en el botón "mostrar carrito"
        carritoVisible = true;
        carrito.style.display = 'block'; // Mostrar el carrito
    } else if (carritoVisible && !carrito.contains(e.target)) {
        // Si el carrito es visible y se hace clic fuera del carrito
        carritoVisible = false;
        carrito.style.display = 'none'; // Ocultar el carrito
    }

    // Si se hace clic en un botón de compra, manejar la compra
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentNode;
        leerDatosElemento(elemento);
    }
}

// Función para leer los datos del elemento seleccionado
function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('figcaption').textContent,
        precio: elemento.querySelector('figcaption + figcaption').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    };
    insertarCarrito(infoElemento);
}

// Función para insertar el elemento en el carrito
function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width="100">
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>`;
    lista.appendChild(row);
}

// Función para vaciar el carrito
function vaciarCarrito() {
    lista.innerHTML = ''; // Elimina todos los elementos hijos de la lista
}

// Función para eliminar un elemento del carrito
function eliminarElementoCarrito(id) {
    const elementoAEliminar = lista.querySelector(`[data-id="${id}"]`);
    if (elementoAEliminar) {
        elementoAEliminar.parentElement.parentElement.remove(); // Elimina la fila completa del carrito
    }
}

// Agregar evento de clic al botón "Vaciar Carrito"
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

// Agregar evento de clic a los botones "X" para eliminar elementos del carrito
lista.addEventListener('click', (e) => {
    if (e.target.classList.contains('borrar')) {
        const id = e.target.getAttribute('data-id');
        eliminarElementoCarrito(id);
    }
});


