import React from "react";
import style from './Paginado.module.css';

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <nav className={style.paginadoContainer}>
            <ul className={style.pagination_ul}>
                { pageNumber && pageNumber.map(number => (
                    <li className={style.paginadoItem} key={number}>
                        <button onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}