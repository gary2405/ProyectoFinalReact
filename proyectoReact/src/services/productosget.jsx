const productosGET = async () => { 
    try {
        const response = await fetch('http://localhost:3002/productos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const data = await response.json();
        return(data)
        } catch(error) {
        console.log(error)
    }
}
export default productosGET