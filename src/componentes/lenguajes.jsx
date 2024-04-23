
import React from "react"
import "./Lenguaje.css"
import { Link } from "react-router-dom";


/** Esta es el componente que me muestra un lenguaje en la vista de app */
function Lenguaje({ nombre = "nombre", descripcion = "descripcion" }) {

    return (
        <div className="Lenguaje">
            <Link to={nombre}>
                <h2>{nombre}</h2>
            </Link>
            <p>{descripcion}</p>
        </div>
    )
}
export default Lenguaje;