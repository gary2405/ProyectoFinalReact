import { useState, useEffect } from 'react';
// Importamos los servicios para operaciones CRUD
import productosPost from '../services/productospost';
import productosGET from '../services/productosget';
import productosDelete from '../services/productosDelete';
import productosPUT from '../services/productosput';
// Importamos el componente Card de React Bootstrap para mostrar los productos
import Card from 'react-bootstrap/Card';

// Definimos el componente ProductsPage
const ProductsPage = () => {
  // Estado para almacenar la lista de helados
  const [helados, setHelados] = useState([]);
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [imgurl, setImgUrl] = useState('');
  // Estado para el producto que se está editando
  const [productoEdit, setProductoEdit] = useState(null);
  // useEffect se ejecuta una vez al montar el componente para obtener la lista de helados
  useEffect(() => {
    const fetchHelados = async () => {
      const data = await productosGET(); // Llama al servicio para obtener productos
      setHelados(data); // Actualiza el estado con la lista de helados obtenida
    };
    fetchHelados(); // Ejecuta la función para obtener productos
  }, []); // El array vacío significa que esto se ejecuta solo una vez al montar el componente
  // Función para manejar el envío del formulario
  const manejarSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    // Si hay un producto en edición, se actualiza
    if (productoEdit) {
      const actualizadoProducto = await productosPUT(
        productoEdit.id,
        nombre,
        precio,
        ingredientes,
        imgurl
      );
      // Si la actualización es exitosa, actualiza la lista de helados
      if (actualizadoProducto) {
        setHelados(helados.map(h => (h.id === productoEdit.id ? actualizadoProducto : h))); //operador ternario
        setProductoEdit(null); // Limpia el estado del producto en edición
      }
    } else {
      // Si no hay un producto en edición, se crea un nuevo producto
      const nuevoProducto = await productosPost(
        nombre,
        precio,
        ingredientes,
        imgurl
      );
      // Si la creación es exitosa, agrega el nuevo producto a la lista de helados
      if (nuevoProducto) setHelados([...helados, nuevoProducto]);
    }
    // Limpia los campos del formulario
    setNombre('');
    setPrecio('');
    setIngredientes('');
    setImgUrl('');
  };
  // Función para eliminar un helado por su ID
  const eliminarHelado = async (id) => { 
    if (await productosDelete(id)) {
      // Si la eliminación es exitosa, actualiza la lista de helados
      setHelados(helados.filter(helado => helado.id !== id));
    }
  };
const iniciarEdicion = (producto) => {
  setProductoEdit(producto); // Establece el estado del producto en edición
  // Llena el formulario con los datos del producto a editar
  setNombre(producto.nombre);
  setPrecio(producto.precio);
  setIngredientes(producto.ingredientes);
  // Actualiza imgurl solo para el producto editado
  setImgUrl(producto.imgurl);
};
// Renderizado del componente
return (
  
  <div>
    
    <div className='formProductos'>
      {/* Formulario para agregar o editar helados */}
      <form onSubmit={manejarSubmit}>
        <label>Nombre:</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <label>Precio:</label>
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        <label>Ingredientes:</label>
        <input value={ingredientes} onChange={(e) => setIngredientes(e.target.value)} required />
        <label>URL:</label>
        <input value={imgurl} onChange={(e) => setImgUrl(e.target.value)} required />
        <button type="submit">{productoEdit ? 'Guardar Cambios' : 'Agregar'}</button>
      </form>
      <br />
    
      <div className='cardscolumns'>
        {helados.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          helados.map(helado => (
            <ul key={helado.id}>
              <Card className='cardproductos'>
                <Card.Img variant="top" src={helado.imgurl} alt={helado.nombre} />
                <Card.Body>
                  <Card.Title>{helado.nombre}</Card.Title>
                  <Card.Text>{helado.precio} <br />{helado.ingredientes}</Card.Text>
                  <button onClick={() => iniciarEdicion(helado)}>Editar</button>
                  <button onClick={() => eliminarHelado(helado.id)}>Eliminar</button>
                </Card.Body>
              </Card>
            </ul>
          ))
        )}
        
      </div>
  
    </div>

  </div>
  
);
};
export default ProductsPage;