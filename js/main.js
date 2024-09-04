const contenedorDestacados = document.getElementById('productosDestacados');
//recorro el array de productos destacados y muestro una card por cada uno
productos.filter(el => el.destacado).forEach(el => {
  const card = document.createElement('div');
  card.classList.add('item');
  card.innerHTML = `        
        <div class="card-masvendido">           
            <div class="card-img"><img src="${el.imagen}"></div>
            <div class="precio-item">
              <h4>$${el.precio}</h4>
            </div>                
            <div class="titulo-item">
              <h4>${el.nombre}</h4>                
            </div>
          <div class="boton-item p-2">
          <button class="btn-carrito" id="btnAgregarCarrito" onclick="agregarAlCarrito(${el.id})"><i class="fa-solid fa-plus me-3"></i>al carrito</button>
          </div>
        </div> 
        
  `;  
  contenedorDestacados.appendChild(card);
});


document.addEventListener('DOMContentLoaded', cargarCarrito);



//


