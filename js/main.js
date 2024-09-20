

// Función para renderizar las tarjetas de productos destacados
const mostrarProductosDestacados = () => {
  const contenedorDestacados = document.getElementById('productosDestacados');

  // Filtrar productos destacados y crear las tarjetas
  productos
    .filter(({ destacado }) => destacado)  
    .forEach(({ img, precio, descripcion, id }) => {  
      const card = document.createElement('div');
      card.classList.add('item');
      card.innerHTML = `
        <div class="card-masvendido">           
            <div class="card-img"><img src="./img/${img}" alt="Imagen del producto"></div>
            <div class="precio-item">
              <h4>$${precio}</h4>
            </div>                
            <div class="titulo-item">
              <h4>${descripcion}</h4>                
            </div>
          <div class="boton-item p-2">
          <button class="btn-carrito" id="btnAgregarCarrito" onclick="agregarAlCarrito(${id})">
            <i class="fa-solid fa-plus me-3"></i>al carrito
          </button>
          </div>
        </div>`;
      contenedorDestacados.appendChild(card);
    });
};

// Llamar a la función para cargar los productos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarProductos);
