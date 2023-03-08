const carrito = document.querySelector('#carrito');
const listaComida = document.querySelector('#lista-comida');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    listaComida.addEventListener('click', agregarComida);
    carrito.addEventListener('click', eliminarComida);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function agregarComida(e) {
     e.preventDefault();
     if(e.target.classList.contains('agregar-carrito')) {
          const comida = e.target.parentElement.parentElement;
          leerDatosComida(comida);
     }
}

function leerDatosComida(comida) {
     const infoComida = {
          titulo: comida.querySelector('h4').textContent,
          precio: comida.querySelector('.precio span').textContent,
          id: comida.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( comida => comida.id === infoComida.id ) ) { 
          const comidas = articulosCarrito.map( comida => {
               if( comida.id === infoAuto.id ) {
                    comida.cantidad++;
                     return comida;
                } else {
                     return comida;
             }
          })
          articulosCarrito = [...comidas];
     }  else {
          articulosCarrito = [...articulosCarrito, infoComida];
     }

     carritoHTML();
}

function eliminarComida(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-comida') ) {
          const comidaId = e.target.getAttribute('data-id')
          
          articulosCarrito = articulosCarrito.filter(comida => comida.id !== comidaId);

          carritoHTML();
     }
}

function carritoHTML() {
     vaciarCarrito();
     articulosCarrito.forEach(comida => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>${comida.titulo}</td>
               <td>${comida.precio}</td>
               <td>${comida.cantidad} </td>
               <td>
                    <a href="#" class="borrar-comida" data-id="${comida.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

function vaciarCarrito() {
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}