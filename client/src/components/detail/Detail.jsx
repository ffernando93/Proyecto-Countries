import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../redux/actions';
import{Link} from "react-router-dom"
import style from './Detail.module.css'

export const Detail = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const country = useSelector(state => state.detail)

    useEffect(()=> {
        dispatch(getById(id))

    },[dispatch,id]);

  return (
    <>
        <div className={style.container}>
          <h1>{country.name}</h1>
          <img src={country.flags} alt={country.name}/>
          <h3>Continent: {country.continents}</h3>
          <h3>Capital: {country.capital}</h3>
          <h3>subregion: {country.subregion}</h3>
          <h3>area: {country.area}</h3>
          <h3>population: {country.population}</h3>
        </div>
        <div>
          {country.activities?.map(e => {
            return(
              <div className={style.container} 
                key={e.id}>
                <h3>Actividad: {e.name}</h3>
                <h3>Dificultad: {e.dificult}</h3>
                <h3>Duracion: {e.duration}</h3>
                <h3>Estacion: {e.season}</h3>
              </div>
            )
          })}
        </div>
        <div className={style.button}>
          <Link to="/home"><button>Volver Home</button></Link>
        </div>
    </>
  )
}
 
export default Detail