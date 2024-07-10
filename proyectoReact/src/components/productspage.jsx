import { useState, useEffect } from 'react';
import productosPost from '../services/productospost';
import productosGET from '../services/productosget';
import productosDelete from '../services/productosDelete';
import productosPUT from '../services/productosput';
import Card from 'react-bootstrap/Card';
import swal from 'sweetalert2';
const ProductsPage = () => {
  const [Helados, setHelados] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [imgurl, setImgUrl] = useState('');

  useEffect(() => {
    const fetchHelados = async () => {
      try {
        const data = await productosGET();
        setHelados(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchHelados();
  }, []);
  


  const eliminarhelado = async (id) => {
    try {
      const confirmacion = await swal({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        buttons: {
          cancel: {
            text: "No, cancelar",
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
          confirm: {
            text: "Sí, eliminarlo!",
            className: "btn btn-success",
            closeModal: true,
          },
        },
        dangerMode: true,
      });
      if (confirmacion) {
        const eliminacionExitoso = await productosDelete(id);
        if (eliminacionExitoso) {
          const nuevaListaHelados = Helados.filter(helado => helado.id !== id);
          setHelados(nuevaListaHelados);
          swal("¡Eliminado!", "El producto ha sido eliminado.", "success");
        } else {
          swal("Error", "Hubo un problema al eliminar el producto.", "error");
        }
      } else {
        swal("Cancelado", "Tu producto está seguro :)", "error");
      }
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      swal("Error", "Hubo un problema al eliminar el producto.", "error");
    }
  };




  

  
  return (
    <div>
      <div className='formProductos'>
        <form >
          <label>Nombre:</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
          <label>Ingredientes:</label>
          <input
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
          <label>URL:</label>
          <input
            value={imgurl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
          <button type="submit">
            {productoEdit !== null ? 'Guardar Cambios' : 'Agregar'}
          </button>
        </form>
        <div className='cardscolumns'>
          {Helados.length === 0 ? (
            <p>No hay productos disponibles</p>
          ) : (
            Helados.map(helado => (
              <ul key={helado.id}>
                <br />
                <Card className='cardproductos'>
                  <Card.Body>
                    <Card.Title>{helado.nombre}</Card.Title>
                    <Card.Text>
                      ${helado.precio} <br />{helado.ingredientes}
                    </Card.Text>
                    <button onClick={() => iniciarEdicion(helado)}>Editar</button>
                    <button onClick={() => eliminarhelado(helado.id)}>Eliminar</button>
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