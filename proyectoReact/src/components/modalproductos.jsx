import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProductsLista from './productslista'; 

function Example() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (

    <>
      {values.map((v, idx) => (
        <Button key={idx} className="buttonlista" onClick={() => handleShow(v)}>
          Descubre nuestros sabores
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de helados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductsLista /> 
        </Modal.Body>
      </Modal>

      
    </>
  );
}
export default Example;