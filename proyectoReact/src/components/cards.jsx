
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return ( 
    
    <div id='cardsHome'>
        
    <Card id='cardHome'>
      <Card.Img className='cardcolor' variant="top" src="img/icecream1.jpg"  />
      <Card.Body>
        <Card.Title>Helado de uva</Card.Title>
        <Card.Text>
        ₡800
        </Card.Text>
        
      </Card.Body>
    </Card>
    

    <Card  id='cardHome'>
      <Card.Img  variant="top" src="img/icecream2.jpg" />
      <Card.Body>
        <Card.Title>Helado de menta</Card.Title>
        <Card.Text>
        ₡800
        </Card.Text>
 
      </Card.Body>
    </Card>


    <Card  id='cardHome'>
      <Card.Img variant="top" src="img/icecream5.jpg"  />
      <Card.Body>
        <Card.Title>Helado Napolitano</Card.Title>
        <Card.Text>
        ₡1200 
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card  id='cardHome'>
      <Card.Img variant="top" src="img/icecream3.jpg" />
      <Card.Body>
        <Card.Title>
          Helado de fresa
        </Card.Title>
        <Card.Text>
        ₡800
        </Card.Text>
      
      </Card.Body>
    </Card>

    <Card  id='cardHome'>
      <Card.Img variant="top" src="img/icecream4.jpg" />
      <Card.Body>
        <Card.Title>Helado de chicle</Card.Title>
        <Card.Text>
        ₡800
        </Card.Text>
        
      </Card.Body>
    </Card>

    
    </div>
    
  );
  
}


export default BasicExample;