import {useState } from "react"

import userPost from "../services/post"

function Registroform() {

    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    

const mostrar = async ()=>{
    
    if (usuario.trim("") === "" && contraseña.trim("") === "") {
        alert("Ingrese un texto")
        
        
    }else{
        userPost(usuario, contraseña)
        alert("registro exitoso")
    }
}

  return (
    <div>
        <img className="imgregister" src="img/imgloginregister.jpg" alt="" />
    <div className="register">
        <h2 className="iniciarsesion">Registrarse</h2>
       
        <input className="inputregister" placeholder="Usuario" type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <br />
     
        <input className="inputregister" placeholder="Contraseña" type="text" value={contraseña} onChange={e => setContraseña(e.target.value)}/>
        <br />
        <button className="buttonregister" onClick={mostrar}>Registar usuario</button>
        
    </div>
    </div>
  )

}

export default Registroform
