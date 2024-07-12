
const productosPUT = async (id, nombre, precio, ingredientes, imgurl) => {
    //actualizadoProducto datos del producto
    const actualizadoProducto = { nombre, precio, ingredientes, imgurl };
    try {
        const response = await fetch(`http://localhost:3002/productos/${id}`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(actualizadoProducto) 
            
        });
        return response.ok ? await response.json() : null;
    } catch (error) {
     
        console.error(error);
        return null; 
    }
};

export default productosPUT;