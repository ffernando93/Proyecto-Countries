
import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css"

export default function Landing() {
    return(
        <div className={style.landing}>
            <h1>Bienvenidos</h1>
            <Link to="/Home">
                <button className={style.boton}>Ingresar</button>
            </Link>
        </div>
    )
};




