import { useState } from "react"
import { Link } from "react-router-dom"
import userGET from "../services/get"
import { useNavigate } from "react-router-dom";
import SweetAlert2 from 'react-sweetalert2';




function Loginform() {
    const [swalProps, setSwalProps] = useState({});
    const [usuario, setUsu] = useState("")
    const [Contrasena, setContrasena] = useState("")
    const navigate = useNavigate();

    const Inicio = async ()=>{

        if (usuario.trim("") === "" && Contrasena.trim("") === "") {
            setSwalProps({
                show: true,
                title: 'Ingrese un texto',
            });
        }else{
            const comparar = await userGET()
            const encontrarUser = comparar.find((e) => e.name == usuario && e.email === Contrasena);
           
            if (encontrarUser) {
                setSwalProps({
                    show: true,
                    title: 'Usuario encontrado',
                });
                navigate("/home")
                
                console.log("true");
            }else{
                console.log("false");
                setSwalProps({
                    show: true,
                    title: 'Usuario o contreseña incorrecto',
                });
            }
            
        }
    }



    

  return (
    <div>

<img className="imglogin" src="img/ppp.jpg" alt="img" />

      
    <div className="login">
        
        <h2 className="iniciarsesion">Iniciar sesion</h2>
        
        <input type="text" placeholder="Correo electronico"  className="input" value={usuario} onChange={e => setUsu(e.target.value)} />
        <br />
        
        <input type="text" placeholder="Contraseña" className="input" value={Contrasena} onChange={e => setContrasena(e.target.value)} />
        <br />
        <button className="btnlog"><Link to='/register'>Registrarme</Link></button>
        <button className="btnlog" onClick={Inicio}>Iniciar sesion</button>
        
        
    </div>
    <SweetAlert2 {...swalProps} />
    </div>
  )
}

export default Loginform