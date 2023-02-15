import axios from "axios"
export const GET_COUNTRIES ='GET_COUNTRIES';
export const GET_COUNTRIES_BY_NAME ='GET_COUNTRIES_BY_NAME';
export const GET_BY_ID = 'GET_BY_ID';
export const CREATE_ACTIVITY = 'Create_Activity';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_POBLATION = 'ORDER_BY_POBLATION'; export const ORDER_BY_RELIGION = "ORDER_BY_RELIGION"

export const getAllCountries = () => async dispatch => {
    return fetch("http://localhost:3001/all")
            .then(response => response.json())
            .then(data => dispatch({type: GET_COUNTRIES, payload: data}))
};
export const getCountriesByName = (name) => async dispatch => {
    return fetch(`http://localhost:3001/all?name=${name}`)
    .then(response => response.json())
    .then(data => dispatch({type:GET_COUNTRIES_BY_NAME,payload: data}))
}

export const getById = (id) => async dispatch => {
        return fetch(`http://localhost:3001/country/${id}`)
        .then(response => response.json())
        .then(data => dispatch({type: GET_BY_ID,payload: data}))
}

export const createActivities = (data)=> async dispatch =>{
    return axios.post('http://localhost:3001/activities', data)
    .then(response => dispatch({type: CREATE_ACTIVITY, payload: response.data}))
}

export function getActivities() {
    return async function (dispatch) {
        var info = await axios.get("http://localhost:3001/activity",{

        });
        
        return dispatch({
        type: GET_ACTIVITIES,
        payload: info.data
    })
}
}
export const orderByPoblation =(type) => {
    return {type:ORDER_BY_POBLATION, payload:type}
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}
export function filterByContinent(payload){
    return {
        type: FILTER_BY_CONTINENT,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}
export const filterByReligion =(type) => {
    return {type:ORDER_BY_RELIGION, payload:type}

}