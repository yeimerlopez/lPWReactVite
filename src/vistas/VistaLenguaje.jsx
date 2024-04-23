import React from "react";
import "./VistaLenguaje.css";

function VistaLenguaje({ len }) {
    return (
        <div className="LenVista">
            <h1>{len.nombre}</h1>
            <h2>{len.descripcion}</h2>
            <img src={len.image} alt={len.image + "Es una imagen de python"} />
        </div>
    )
}

export default VistaLenguaje;