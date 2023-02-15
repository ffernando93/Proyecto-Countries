import React,{useState,useEffect}from "react";
import { useDispatch,useSelector} from "react-redux"
import {getAllCountries, createActivities} from "../../redux/actions"
import validate from "../../helpers/Validate";
import { Link } from "react-router-dom";

export default function Form () {
    const dispatch = useDispatch();
    const countries = useSelector( state => state.countries);
    useEffect(()=>{
        dispatch(getAllCountries())
    },[dispatch])
    
    const [state, setState] = useState({
        name: '',
        dificult: '',
        duration: '',
        season: '',
        countries: []
    })
    const [errors, setErrors] = useState({}); 
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

        setErrors(validate({                 
            ...state,                        
            [e.target.name] : e.target.value
        }));
    }
    function handleSelect(e) {
            setState({
                ...state,
                countries: [...state.countries, e.target.value]
            });
            setErrors(validate({                 
                ...state,
                countries: [...state.countries, e.target.value]
            }));
    }
    function filtercountries(e) {
        setState({
            ...state,
            countries: state.countries.filter(el => el.name !== e.target.name)
        });
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (    errors.name !== undefined 
                || errors.dificult !== undefined 
                || errors.duration !== undefined 
                || errors.season !== undefined 
                || errors.countries !== undefined 
        )  {
            return alert("Sorry, all fields are required");
        } else if (state.name === "" 
            || state.dificult === "" 
            || state.duration === "" 
            || state.season === ""
            || state.countries?.length === 0
             ) {
                console.log("2")
            return alert("Sorry, all fields are required");
        } else {dispatch(createActivities(state))          
            
            setState({
                name: '',
                dificult: '',
                duration: '',
                season: '',
                countries: []
            })
            alert("Excellent, your new countries has been created successfully!!")
        }
    }
    return (
        <>
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}  action="">
                <div>
                    <label htmlFor="">Name: </label>
                    <input 
                        placeholder="name"
                        type="text" 
                        name="name"  
                        value={state.name} 
                        onChange={ e => handleChange(e)}
                    />
                    {errors.name && (    
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Dificult : </label>
                    <input 
                        type="number"  
                        name="dificult"  
                        value={state.dificult} 
                        placeholder="dificult"
                        onChange={ e => handleChange(e)}  
                    />
                    {errors.dificulty && (    
                        <p>{errors.dificult}</p>
                    )}
                </div>
                <div>
                <label htmlFor="">Duration: </label>
                    <input 
                        type="number"  
                        name="duration"  
                        value={state.duration}
                        placeholder="duration" 
                        onChange={ e => handleChange(e)}  
                    />
                    {errors.duration && (    
                        <p>{errors.duration}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Season: </label>
                    <select onChange={ e => handleChange(e)} name="season">
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                    {errors.season && (    
                        <p>{errors.season}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="">Select countries</label>
                    <select onChange={(e)=>handleSelect(e)}>
                        {
                            countries.map( e => {
                                return (
                                    <option key={e.name} value={`${e.name}`}>{e.name}</option>
                                )
                            })
                        }
                    </select>
                    {errors.countries && (    
                        <p>{errors.countries}</p>
                    )}
                </div>
                <div>
                    <input  type="submit" value="Send"/>
                </div>
            </form>
        </div>
            <div>
                <h3>countries</h3>
                <div>
                    {
                        state.countries?.map( (e) => {
                            return (
                                
                                <div key={e}>
                                    <div>
                                        <li>{e}</li>
                                        <button name={`${e}`} onClick={(e)=>{filtercountries(e)}}>X</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
            <Link to="/home"><button>Back Home</button></Link>
            </div>
            </>
    )
}