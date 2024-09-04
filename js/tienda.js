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

    // Crear un botón de radio por cada categoría
    categorias.forEach(categoria => {
        const radio = document.createElement('div');
        radio.innerHTML = `
            <input type="radio" id="categoria${categoria.id}" name="categoria" value="${categoria.id}" onchange="aplicarFiltros()" />
            <label for="categoria${categoria.id}">${categoria.nombre}</label>
        `;
        contenedorRadios.appendChild(radio);
    });
}

// Llama a la función para generar los botones de radio al cargar la página
document.addEventListener('DOMContentLoaded', generarRadiosCategorias);


function aplicarFiltros() {
    const filtroCategoriaId = document.querySelector('input[name="categoria"]:checked').value;
    const filtroPrecioMin = parseFloat(document.getElementById('precioMin').value) || 0;
    const filtroPrecioMax = parseFloat(document.getElementById('precioMax').value) || Infinity;
    const filtroNombre = document.getElementById('filtroNombre').value.toLowerCase();

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = filtroCategoriaId === '' || producto.categoria == filtroCategoriaId;
        const coincidePrecio = producto.precio >= filtroPrecioMin && producto.precio <= filtroPrecioMax;
        const coincideNombre = producto.nombre.toLowerCase().includes(filtroNombre);

        return coincideCategoria && coincidePrecio && coincideNombre;
    });

    mostrarProductos(productosFiltrados);
}


function actualizarPrecioMin() {
    const precioMin = document.getElementById('precioMin').value;
    document.getElementById('precioMinValor').textContent = precioMin;
    aplicarFiltros();
}

function actualizarPrecioMax() {
    const precioMax = document.getElementById('precioMax').value;
    document.getElementById('precioMaxValor').textContent = precioMax;
    aplicarFiltros();
}

function mostrarProductos(productosFiltrados) {
    const contenedorProductos = document.getElementById('contenedorProductos');
    contenedorProductos.innerHTML = '';

    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        
        <div class="card-img"><img src=".${producto.imagen}" ></div>
        <div class="precio-item">
            <h4>$${producto.precio}</h4>
        </div>                
        <div class="titulo-item">
            <h4>${producto.nombre}</h4>                
        </div>
        <div class="boton-item p-2">
        <button class="btn-carrito" id="btnAgregarCarrito" onclick="agregarAlCarrito(${producto.id})"><i class="fa-solid fa-plus me-3"></i>al carrito</button>
        </div>
        
        `;
        contenedorProductos.appendChild(card);
    });
}

// Mostrar todos los productos inicialmente
document.addEventListener('DOMContentLoaded', () => mostrarProductos(productos));