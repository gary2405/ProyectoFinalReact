const productosDelete = async (id) => {
    await fetch(`http://localhost:3002/productos/${id}`, {
      method: 'DELETE',
    });
  };


  export default productosDelete