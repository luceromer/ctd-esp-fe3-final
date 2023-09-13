import React, { useContext } from "react"
import { ContextGlobal } from "../utils/global.context"
import { Link } from "react-router-dom"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal)

  return (
    <nav className={theme}>
      <div className="navlinks">
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme} className="toggle-theme">
        Change theme
      </button>
    </nav>
  )
}

export default Navbar
