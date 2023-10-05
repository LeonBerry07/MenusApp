import { useState } from "react";
import { Link as RouterLink} from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return(
        <div className="nav">

      <div className="search">
      <RouterLink to={'/'}>
      <label className="vid">Menús App</label>
      </RouterLink>
      <input className="box" type='search'/>
      <button className="button">Buscar</button>
      </div>

      {/* <div className="firm"> */}
      <RouterLink to={'/form'}>Crear Receta</RouterLink>
      {/* </div> */}

      </div>
    )
}

export default NavBar;