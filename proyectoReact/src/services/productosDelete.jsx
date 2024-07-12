const productosDelete = async (id) => { //eliminaproducto mediante id
  try {
    const response = await fetch(`http://localhost:3002/productos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el producto');
    }
    return true; 
  } catch (error) {
    console.error('Error en productosDelete:', error);
    return false; 
  }
};
export default productosDelete;