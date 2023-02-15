import React, { useState } from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import CardContainers from "../../components/cardsContainers/CardsContainers"
import {getAllCountries,filterCreated,filterByContinent,orderByName,getActivities,orderByPoblation} from "../../redux/actions"
import { Link } from 'react-router-dom'
import Paginado from '../../components/paginado/Paginado'
import SearchBar from '../../components/searchBar/SearchBar'
import style from "./Home.module.css"


export const Home = () => {

  const allCountries = useSelector( state => state.countries)
  const activities = useSelector(state=> state.activities)
  const dispatch = useDispatch()
 
const [currentPage, setCurrentPage] = useState(1);
const [countriesPerPage, setCountriesPerPage] = useState(10);
const [order, setOrder] = useState('');
const indexOfLastCountry = currentPage * countriesPerPage;
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)
const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}
 
  useEffect(()=>{
    dispatch(getAllCountries())
    dispatch(getActivities())
},[dispatch])

function handleSelect (e){
  e.preventDefault();
  dispatch(filterCreated(e.target.value)) 
  setCurrentPage(1)
    
 
  };
  const handleChange = (e) => {
    dispatch(orderByPoblation(e.target.value))
    
  } 

function handleFilterContinent(e) {
  dispatch(filterByContinent(e.target.value))
  setCurrentPage(1);
}

function handleSortName(e){
  e.preventDefault();
  dispatch(orderByName(e.target.value));
  setCurrentPage(1);
  setOrder(`Ordenado de ${e.target.value}`);
  }; 

  return (
    <div> 
    <SearchBar/>

                <div>    
                    <select onChange={(el)=>handleSelect(el)}>
                    <option value ='sin filtros '>Sin Filtrar</option>
                        {activities.map((act)=>(
                    <option value={act.name}>{act.name}</option>
                     ))}
                    </select>
                </div>
                <div>
    <select onClick={(e) => handleSortName(e)}>
                    <option>Sort by Name</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                </select>
    </div>
    <div>
        <select onChange={handleChange} name="countries" id="countries">
            <option value="">Order by Population</option>
            <option value="minPopulation">Min Population</option>
            <option value="maxPopulation">Max Population</option>
        </select>
    </div>

                {/* Filter by Continent */}
                <div>
                <select onClick={(e) => handleFilterContinent(e)}>
                    <option value='All'>Buscar por Continent</option>
                    <option value='Europe'>Europe</option>
                    <option value='Asia'>Asia</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Africa'>Africa</option>
                    <option value='Oceania'>Oceania</option>
                    <option value='Antarctica'>Antartida</option>
                </select>
                </div>

                <div>
    <Link to='/activity'><button>Crea tu Actividad</button></Link>
    </div>

    <div className= {style.cards}>       
    { 
    
     currentCountries?.map(c => 
        <Link to={/country/ + c.id}>
      <CardContainers id={c.id} image={c.flags} name={c.name} continents={c.continents}/>
        </Link>
        )
    }
    </div> 
        

    <div>
   
    <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado}/>
    </div>
    </div>
  )   
   
}

export default Home;