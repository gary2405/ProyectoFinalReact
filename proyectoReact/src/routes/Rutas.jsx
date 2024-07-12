import { BrowserRouter as Router,Routes,Route } from "react-router-dom"


import Login from '../pages/login'
import AboutUs from "../components/aboutUs"
import  Registro from '../pages/register'
import Home from "../pages/homepage"
import Contact from "../components/contact"
import Productspage from "../components/productspage"
import Productslista from "../components/productslista"
function Rutas() {
  return (
    <div>

        <Router>
            <Routes>
                     <Route path='/register' element={< Registro/>}   />
                     <Route path='/login' element={<Login/>}   />
                     <Route path='/home' element={<Home/>}   />
                     <Route path='/aboutus' element={<AboutUs/>}   />
                     <Route path='/contactus' element={<Contact/>}   />
                     <Route path='/products' element={<Productspage/>}   />
                     <Route path='/productslista' element={<Productslista/>}   />
                     
            </Routes>
        </Router>
      
    </div>
  )

}

export default Rutas