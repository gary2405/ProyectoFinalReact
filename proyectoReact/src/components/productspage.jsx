import { useState, useEffect } from 'react';
import productosPost from '../services/productospost';
import productosGET from '../services/productosget';
import productosDelete from '../services/productosDelete';
import productosPUT from '../services/productosput';
import Card from 'react-bootstrap/Card';

//define componente ProductsPage
const ProductsPage = () => {
  //estado para almacenar la lista de helados
  const [helados, setHelados] = useState([]);
  //estados del formulario
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [imgurl, setImgUrl] = useState('');
  const [productoEdit, setProductoEdit] = useState(null);
  // el useEffect solo se usa una vez al montar el componente para obtener la lista de helados
  useEffect(() => {
    const fetchHelados = async () => {
      const data = await productosGET(); // Llama al servicio para obtener productos
      setHelados(data); // Actualiza el estado con la lista de helados obtenida
    };
    fetchHelados(); // Ejecuta la función para obtener productos
  }, []); // El array vacío significa que esto se ejecuta solo una vez al montar el componente
  // Función para manejar el envío del formulario
  const envioForm = async (e) => {
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
      //Si la actualización es exitosa, actualiza la lista de helados
      if (actualizadoProducto) {
        setHelados(helados.map(h => (h.id === productoEdit.id ? actualizadoProducto : h))); //operador ternario
        setProductoEdit(null); // Limpia el estado del producto en que se esta editando
      }
    } else {
      //Si no hay un producto en edición, se crea un nuevo producto
      const nuevoProducto = await productosPost(
        nombre,
        precio,
        ingredientes,
        imgurl
      );
      //si la creación es exitosa agrega el nuevo producto a la lista de helados
      if (nuevoProducto) setHelados([...helados, nuevoProducto]);
    }
    // Limpia los input
    setNombre('');
    setPrecio('');
    setIngredientes('');
    setImgUrl('');
  };

  //elimina un helado por su id
  const eliminarHelado = async (id) => { 
    
    if (await productosDelete(id)) {
      //si la eliminación es correccta actualiza la lista de helados
      setHelados(helados.filter(helado => helado.id !== id));
    }
  };
const iniciarEdicion = (producto) => {
  setProductoEdit(producto); // Establece el estado del producto en edición

  // pondra los datos del producto a editar
  setNombre(producto.nombre);
  setPrecio(producto.precio);
  setIngredientes(producto.ingredientes);
  setImgUrl(producto.imgurl);
};

return (
  
  <div>
    
    <div className='formProductos'>
      <form onSubmit={envioForm}>
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
                  <Card.Text>₡{helado.precio} <br />{helado.ingredientes}</Card.Text>
                  <button className='buttoncard' onClick={() => iniciarEdicion(helado)}>Editar</button>
                  <button className='buttoncard' onClick={() => eliminarHelado(helado.id)}>Eliminar</button>
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