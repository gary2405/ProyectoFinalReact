import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import productosGET from '../services/productosget';
import { Link } from 'react-router-dom';
const Productslista = () => {
  // Estado para almacenar la lista de helados
  const [helados, setHelados] = useState([]);
  // useEffect se ejecuta una vez al montar el componente para obtener la lista de helados
  useEffect(() => {
    const fetchHelados = async () => {
      const data = await productosGET(); // Llama al servicio para obtener productos
      setHelados(data); // Actualiza el estado con la lista de helados obtenida
      console.log(data);
      
    };
    fetchHelados(); // Ejecuta la función para obtener productos
  }, []); // El array vacío significa que esto se ejecuta solo una vez al montar el componente
  // Renderizado del componente
  return (
    <div>
      <div className='cardscolumns'>
        {/* Muestra los productos en una lista de cards */}
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