import { useState, useEffect } from 'react';

import productosGET from '../services/productosget';

import Card from 'react-bootstrap/Card';


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


  return (
    <div>
      <div className='formProductos'>
   
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
                    <button >Editar</button>
                    <button >Eliminar</button>
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