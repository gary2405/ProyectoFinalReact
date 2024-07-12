const productosDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:3002/productos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el producto');
    }
    return true; //Devuelve true si la eliminación fue exitosa
  } catch (error) {
    console.error('Error en productosDelete:', error);
    return false; 
  }
};
export default productosDelete;