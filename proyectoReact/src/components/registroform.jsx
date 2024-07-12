import { useState } from "react";
//imp userPost para realizar la solicitud de registro
import userPost from "../services/post";

function Registroform() {
    
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    // Función async que que ve el registro de usuario.
    const mostrar = async () => {
        if (usuario.trim() === "" && contraseña.trim() === "") {
            alert("Ingrese un texto");
        } else {
            // Si los inputs no están vacíos, llamara la función userPost para registrar el usuario
            await userPost(usuario, contraseña);
    
            alert("registro exitoso");
        }
    }

    return (
        <div>
            <img className="imgregister" src="img/imgloginregister.jpg" alt="" />
            <div className="register">
                <h2 className="iniciarsesion">Registrarse</h2>
                <input
                    className="inputregister"
                    placeholder="Usuario"
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
                <br />
                <input
                    className="inputregister"
                    placeholder="Contraseña"
                    type="text"
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />
                <br />
                <button className="buttonregister" onClick={mostrar}>Registrar usuario</button>
            </div>
        </div>
    );
}
export default Registroform;
