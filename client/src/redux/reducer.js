import { GET_COUNTRIES, GET_BY_ID, GET_COUNTRIES_BY_NAME, CREATE_ACTIVITY, GET_ACTIVITIES, ORDER_BY_NAME, FILTER_BY_CONTINENT,FILTER_CREATED ,ORDER_BY_POBLATION, } from "./actions"

const initialState ={
    countries :[], 
    filterCountries:[],
    detail:{},
    activities: []
}


const rootReducer = (state= initialState, action) =>{ 
     let aux=[]
    switch (action.type) {
        case GET_COUNTRIES:
            return{
                ...state,
                countries: action.payload,
                filterCountries:action.payload
            }

            case GET_COUNTRIES_BY_NAME:
                return{
                    ...state,
                    countries:[...action.payload]
                } 
         
        case GET_BY_ID: 
             return{
                ...state,
                detail: action.payload
             }
              case CREATE_ACTIVITY:
             return{
                 ...state,
                 activities: [...state.activities, action.payload]
             }
             case ORDER_BY_POBLATION:
            aux = [...state.filterCountries]
            if (action.payload === "minPopulation") {
                aux = state.filterCountries.sort((a,b)=> a.population - b.population)
            } else if (action.payload === "maxPopulation") {
                aux = state.filterCountries.sort((a,b)=> b.population - a.population)
            } else {
                aux = [...state.countries]
            }
            return {
                ...state,
                countries: [...aux]
            }
     
             case ORDER_BY_NAME:
                 let orderName = action.payload === 'A to Z' ?
                 state.countries.sort(function(a, b) {
                     if (a.name > b.name) return 1;
                     if (a.name < b.name) return -1;
                     return 0
                 }) :
                 state.countries.sort(function(a, b){
                     if (a.name > b.name) return -1;
                     if (a.name < b.name) return 1;
                     return 0
                 })
                 return {
                     ...state,
                     countries: orderName
                 }
     
                 case GET_ACTIVITIES:
                                     
                     return {
                         ...state,
                         activities: action.payload
                     }
     
                     case FILTER_CREATED:
                         // let filter = action.payload ==='sin filtro'?state.filterCountries : state.filterCountries.filter((c)=>{
                         //     const activities= c.activities.map((a)=>a.name)
                         //     return activities.includes(action.payload)
                         // })
                                               
                         // return {
                         //     ...state,
                         //     countries: filter
                         // }   
           const activitiesbycountries = state.activities
           const countriesAll = state.countries
           console.log("FILTER_ACTIVITY - activitiesbycountries: " , activitiesbycountries)
           console.log("trae" ,countriesAll)
           const filt = action.payload ==='sin filtros' ? countriesAll : activitiesbycountries.filter(a=> a.name ===  action.payload)[0].countries.map(e => e)
           console.log("FILT___:", filt)
      return{
                 ...state,
                 countries: filt
         };
            //    case ORDER_BY_RELIGION:
            //     const allCountry = state.filterCountries;
            //     const religionFiltered= action.payload !== "" ? allCountry.filter(r => r.religion === action.payload) : allCountry;
            //     return {
            //         ...state,
            //         countries : religionFiltered
            //     }
             
                 case FILTER_BY_CONTINENT:
                 const allCountries = state.filterCountries;
                 const continentFiltered = action.payload === 'Filter by Continent' ? allCountries : allCountries.filter(c => c.continents === action.payload)
                 return {
                     ...state,
                     countries: continentFiltered
                 }
         default:
             return {...state}
     }
     }
             
    export default rootReducer;