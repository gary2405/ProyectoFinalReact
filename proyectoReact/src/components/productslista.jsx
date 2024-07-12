import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import productosGET from '../services/productosget';
import { Link } from 'react-router-dom';
const Productslista = () => {
  //estad para almacenar la lista de helados
  const [helados, setHelados] = useState([]);

  useEffect(() => {
    const fetchHelados = async () => {
      const data = await productosGET(); //llama a get para obtener productos
      setHelados(data); //actualiza el estado con la lista de helados obt
      console.log(data);
      
    };
    fetchHelados(); //hace la función para obtener productos
  }, []); //este array vacío significa que esto se hara solo una vez al montar el componente

  return (
    <div>
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
                  <Card.Text>
                    ${helado.precio} <br />{helado.ingredientes}
                  </Card.Text>
                </Card.Body>
              </Card>
            </ul>
          ))
        )}
      </div>
      <button><Link to='/products'>Volver</Link></button>
    </div>
  );
};
export default Productslista;