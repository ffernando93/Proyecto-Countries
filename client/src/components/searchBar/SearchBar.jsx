
import React,{useState} from 'react'
import { useDispatch} from "react-redux"
import { getCountriesByName } from '../../redux/actions'
// import { filterByReligion } from '../../redux/actions'
function SearchBar() {

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const handlechange = (e) => {
    setName(e.target.value)
  }
  const handleClick = () => {
    dispatch(getCountriesByName(name))
  } 
  // const [religion,setReligion] = useState("")
  // const handleRel = (e) =>{
  //   setReligion(e.target.value)
  //   console.log(e.target.value);
  // } 
  // const handleCat = () => {
  //   dispatch(filterByReligion(religion))
  // }
  return (
    
    <div>
        <input onChange={handlechange} type="text" placeholder="Escribe nombre"/>
        <button onClick={handleClick}>Buscar</button> 
        {/* <input onChange={handleRel} type="text" placeholder="Escribe religion"/>
        <button onClick={handleCat}>Buscar</button>  */}
    </div>
    
  

  )
}

export default SearchBar;