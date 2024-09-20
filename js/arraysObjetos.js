// Array para almacenar los productos
let productos = [];

// Función para cargar los productos desde el archivo JSON
const cargarProductos = async () => {
  try {
    const response = await fetch('/data/productos.json');
    if (!response.ok) throw new Error('Error al cargar los productos');
    
    productos = await response.json(); // Asigna los productos al array
    console.log("productos", productos);

    // Llamar a la función para mostrar los productos destacados una vez que se carguen
    mostrarProductosDestacados();
  } catch (error) {
    console.error('Error:', error);
  }
};

// Array para almacenar las categorías
let categorias = [];

// Función para cargar las categorías desde el archivo JSON
const cargarCategorias = async () => {
  try {
    const response = await fetch('/data/categorias.json');
    if (!response.ok) throw new Error('Error al cargar las categorías');
    
    categorias = await response.json(); // Asigna las categorías al array
    console.log("categorias", categorias);


    
  } catch (error) {
    console.error('Error:', error);
  }
};