import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import  productosGET  from '../services/productosget';

import { Link } from 'react-router-dom';

const Productslista = () => {
  const [helados, sethelados] = useState([]);
  useEffect(() => {
    const fetchhelados = async () => {
      const data = await productosGET();
      sethelados(data);
      console.log(data)
    };
    fetchhelados();
  }, []);
  
  return (
    <div>
      <div className='cardscolumns'>
      
      
        {helados.map(helado => (
          <ul key={helado.id}>
          
     <Card className='cardproductos'>
      
      <Card.Body>
        <Card.Title>{helado.nombre}</Card.Title>
        <Card.Text>
         ${helado.precio}{helado.ingredientes}
        </Card.Text>

      </Card.Body>
    </Card>
        
          </ul>
        ))}
      
      
      </div>
      <button><Link to='/products'>Volver</Link></button>
    </div>
  );
};
export default Productslista;