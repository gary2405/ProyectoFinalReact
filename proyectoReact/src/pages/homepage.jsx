import Destacados from "../components/destacados"
import BasicExample from "../components/cards"
import Infogeneral from "../components/infogeneral"
import Header from "../components/header"

import Modalproductos from '../components/modalproductos'

function Homepage() {
  return (
    <div>
        <Header/>
      <Infogeneral/>
      
      <Destacados/>
      
      <BasicExample/>
    
     <Modalproductos/>

    </div>
  )
}

export default Homepage
