const productosPost = async (nombre, precio, ingredientes, imgurl) => { 
    try {
        const response = await fetch('http://localhost:3002/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            ingredientes: ingredientes,
            imgurl: imgurl
            })
        });
        const data = await response.json();
        return data
        } catch(error) {
        console.log(error)
    }
}
export default productosPost