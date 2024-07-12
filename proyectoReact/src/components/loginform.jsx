import { useState } from "react";
import { Link } from "react-router-dom";
import userGET from "../services/get";
import { useNavigate } from "react-router-dom";
import SweetAlert2 from 'react-sweetalert2';
//funcion donde define el componente Loginform
function Loginform() {
    //Declaracion de estados 
    const [swalProps, setSwalProps] = useState({});
    const [usuario, setUsu] = useState("");
    const [Contrasena, setContrasena] = useState("");
    //useNavigate para redirigir a otras rutas
    const navigate = useNavigate();


    // Función async que maneja el inicio de sesión.
    const Inicio = async () => {
        //si los input usuario y contraseña están vacíos muestra alert
        if (usuario.trim() === "" && Contrasena.trim() === "") {
            setSwalProps({
                show: true,
                title: 'Ingrese un texto',
            });
        } else {

            // función userGET para obtener los datos de los usuarios
            const comparar = await userGET();

            //busca si el usuario y la contraseña coinciden con algun registro
            const encontrarUser = comparar.find((e) => e.name === usuario && e.email === Contrasena);
            if (encontrarUser) {
                //si el usuario se encuentra mostrara alerta
                alert("Usuario encontrado");
                navigate("/home");
                console.log("true");
            } else {
                //si el usuario no se encuentra, mostrara error con SweetAlert2
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
            <img className="imglogin" src="img/imgloginregister.jpg" alt="img" />
            <div className="login">
                <h2 className="iniciarsesion">Iniciar sesión</h2>
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    className="input"
                    value={usuario}
                    onChange={e => setUsu(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Contraseña"
                    className="input"
                    value={Contrasena}
                    onChange={e => setContrasena(e.target.value)}
                />
                <br />
                <button className="btnlog">
                    <Link to='/register'>Registrarme</Link>
                </button>
                <button className="btnlog" onClick={Inicio}>Iniciar sesión</button>
            </div>
            <SweetAlert2 {...swalProps} />
        </div>
    );
}

export default Loginform;