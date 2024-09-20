// Función para generar los botones de radio de categorías
function generarRadiosCategorias() {
    const contenedorRadios = document.getElementById('filtroCategoriaRadios');
    contenedorRadios.innerHTML = '';
  
    // Opción para "Todas" las categorías
    const radioTodas = document.createElement('div');
    radioTodas.innerHTML = `
        <input type="radio" id="categoriaTodas" name="categoria" value="" checked onchange="aplicarFiltros()" />
        <label for="categoriaTodas">Todas</label>
    `;
    contenedorRadios.appendChild(radioTodas);
  
    // Crear un botón de radio por cada categoría cargada
    categorias.forEach(({ id, nombre}) => {
      const radio = document.createElement('div');
      radio.innerHTML = `
          <input type="radio" id="categoria${id}" name="categoria" value="${id}" onchange="aplicarFiltros()" />
          <label for="categoria${id}">${nombre}</label>
      `;
      contenedorRadios.appendChild(radio);
    });
  }
  
  // Función para aplicar los filtros de productos
  function aplicarFiltros() {
    const filtroCategoriaId = document.querySelector('input[name="categoria"]:checked').value;
    const filtroPrecioMin = parseFloat(document.getElementById('precioMin').value) || 0;
    const filtroPrecioMax = parseFloat(document.getElementById('precioMax').value) || Infinity;
    const filtroNombre = document.getElementById('filtroNombre').value.toLowerCase();
    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = filtroCategoriaId === '' || producto.categoria == filtroCategoriaId;
        const coincidePrecio = producto.precio >= filtroPrecioMin && producto.precio <= filtroPrecioMax;
        const coincideNombre = producto.descripcion.toLowerCase().includes(filtroNombre);  
        return coincideCategoria && coincidePrecio && coincideNombre;
    });
  
    mostrarProductos(productosFiltrados);
  }
  
  // Función para actualizar el valor mínimo del precio
  function actualizarPrecioMin() {
    const precioMin = document.getElementById('precioMin').value;
    document.getElementById('precioMinValor').textContent = precioMin;
    aplicarFiltros();
  }
  
  // Función para actualizar el valor máximo del precio
  function actualizarPrecioMax() {
    const precioMax = document.getElementById('precioMax').value;
    document.getElementById('precioMaxValor').textContent = precioMax;
    aplicarFiltros();
  }
  
  // Función para mostrar los productos filtrados
  function mostrarProductos(productosFiltrados) {
    const contenedorProductos = document.getElementById('contenedorProductos');
    contenedorProductos.innerHTML = '';
    productosFiltrados.forEach(({ img, precio, descripcion, id }) => {  
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-img"><img src="../img/${img}" alt="Imagen del producto"></div>
        <div class="precio-item">
            <h4>$${precio}</h4>
        </div>                
        <div class="titulo-item">
            <h4>${descripcion}</h4>                
        </div>
        <div class="boton-item p-2">
        <button class="btn-carrito" id="btnAgregarCarrito" onclick="agregarAlCarrito(${id})">
          <i class="fa-solid fa-plus me-3"></i>al carrito</button>
        </div>
      `;
      contenedorProductos.appendChild(card);
    });
  }
  
  // Llamada inicial para cargar productos y categorías cuando se carga la página
  document.addEventListener('DOMContentLoaded', async () => {
    await cargarProductos();  // Cargar productos de forma asíncrona
    await cargarCategorias(); // Cargar categorías de forma asíncrona  
    // Generar radios de categorías y mostrar todos los productos
    generarRadiosCategorias();
    mostrarProductos(productos); // Mostrar todos los productos inicialmente
  });
  