// creo la funcion constructora de productos
class Producto {
    constructor(id, nombre, precio, imagen, categoria, stock, destacado) {
        this.id= id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.stock = stock;
        this.destacado = destacado;
    }
  }
  class Categoria {
    constructor(id, nombre, imagen) {
        this.id= id;
        this.nombre = nombre;
        this.imagen = imagen;
    }
  }
  const categorias = [];
  const caregoria_1 = new Categoria(1, "Exterior", "../img/categoria_1.jpg");
  const caregoria_2 = new Categoria(2, "Interior", "../img/categoria_2.jpg");
  const caregoria_3 = new Categoria(3, "Cocina", "../img/categoria_3.jpg");
  const caregoria_4 = new Categoria(4, "Baño", "../img/categoria_4.jpg");
  const caregoria_5 = new Categoria(5, "Jardin", "../img/categoria_5.jpg");
  const caregoria_6 = new Categoria(6, "Vajillas", "../img/categoria_6.jpg");
  categorias.push(caregoria_1, caregoria_2, caregoria_3, caregoria_4, caregoria_5, caregoria_6);
  
  
  const productos = [];
  const producto_1 = new Producto(1, "Kit parrilla 4 piezas", 25000, "./img/producto1.jpg", 1, 10, true);
  const producto_2 = new Producto(2, "Set Vajillas 6 piezas", 12000, "./img/producto3.jpg", 6, 10, false);
  const producto_3 = new Producto(3, "Sarten Antiadherente 26 cm", 42000, "./img/producto_sarten.jpg", 3, 10, true);
  const producto_4 = new Producto(4, "Alocacia", 8000, "./img/producto2.jpg", 5, 10, true);
  const producto_5 = new Producto(5, "Sillon dos cuerpos madera exterior", 25000, "./img/producto4.jpg", 1, 10, false);
  const producto_6 = new Producto(6, "Velador Maddie", 14800, "./img/producto6.jpg", 2, 10, true);
  const producto_7 = new Producto(7, "Sofá 2 cuerpos gris", 89000, "./img/producto5.jpg", 2, 10, false);
  const producto_8 = new Producto(8, "Maceta gris chica", 8000, "./img/producto12.jpg", "Exterior", 10, false);
  productos.push(producto_1, producto_2, producto_3, producto_4, producto_5, producto_6, producto_7, producto_8);