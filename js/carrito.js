carrito=[];
const contenedorCarrito = document.getElementById('carrito');
//cargar carrito
function cargarCarrito() {
  const carritoGuardado = sessionStorage.getItem('carrito');
  if (carritoGuardado) {
      carrito = JSON.parse(carritoGuardado);
      mostrarCarrito(); // Mostrar el carrito cargado
  }
}
// Función para guardar el carrito en sessionStorage
function guardarCarrito() {
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}
// Función para agregar productos al carrito
function agregarAlCarrito(productoId) {
  const producto = productos.find(p => p.id === productoId);
  const productoEnCarrito = carrito.find(p => p.id === productoId);
  const { cantidad = 0 } = productoEnCarrito || {};
  productoEnCarrito ? productoEnCarrito.cantidad = cantidad + 1 : carrito.push({ ...producto, cantidad: 1 });
  
  Toastify({
    text: "Agregaste un producto al carrito",
    duration: 2000,
    //destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  guardarCarrito(); // Guardar el carrito en sessionStorage
  mostrarCarrito();  
  actualizarBadgeCarrito();
}
// Función para eliminar productos del carrito
function eliminarDelCarrito(productoId) {
  carrito = carrito.filter(producto => producto.id !== productoId);
  guardarCarrito(); // Guardar el carrito en sessionStorage
  mostrarCarrito();
  actualizarBadgeCarrito();
}
// Función para actualizar la cantidad de un producto en el carrito
function actualizarCantidad(productoId, nuevaCantidad) {
  const producto = carrito.find(p => p.id === productoId);
  if (producto) {
      producto.cantidad = parseInt(nuevaCantidad);
      guardarCarrito(); // Guardar el carrito en sessionStorage
      mostrarCarrito();
      actualizarBadgeCarrito();
  }
}
function mostrarCarrito() {
  const contenedorCarrito = document.getElementById('carritoItems');
  contenedorCarrito.innerHTML = '';
  carrito.forEach(producto => {
      const item = document.createElement('div');
      item.className = 'carrito-item';
      const precioTotal = producto.precio * producto.cantidad;
      item.innerHTML = `
          <div class="producto-carrito-img"><img src="${producto.imagen}" alt="imagen-${producto.nombre}" ></div>
          <div class="producto-carrito-detalle">
            <h5>${producto.nombre}</h5>
            <div class="producto-carrito-cantidad"> 
              Cant. <input type="number" min="1" size="2" value="${producto.cantidad}" onchange="actualizarCantidad(${producto.id}, this.value)">                                   
              <button class="btn-eliminar" onclick="eliminarDelCarrito(${producto.id})"><i class="fa-solid fa-trash"></i></button>
            </div>             
            <h5><small>$${producto.precio}</small> - <strong>$${precioTotal}</strong></h5>       
          </div>
          </div>
          <hr>
      `;
      contenedorCarrito.appendChild(item);
  });
  mostrarTotalCarrito();
}
function mostrarTotalCarrito() {
  const total = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
  document.getElementById('totalCarrito').innerHTML = `<h4>Total: $${total}</h4>`;
 // console.log("Total del carrito:", total);
}
function actualizarBadgeCarrito() {
    const carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    const carritoBadge = document.getElementById('carrito-badge');
    const cantidadItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    if (cantidadItems > 0) {
        carritoBadge.textContent = cantidadItems;
        carritoBadge.style.display = 'inline';
    } else {
        carritoBadge.style.display = 'none';
    }
}

function limpiarCarrito() {
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
  actualizarBadgeCarrito();
} 

// Event listeners

document.addEventListener('DOMContentLoaded', actualizarBadgeCarrito);
document.addEventListener('DOMContentLoaded', cargarCarrito);