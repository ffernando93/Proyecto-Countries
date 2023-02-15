const { Country, Activities} = require("../db")
const axios = require("axios");


const url = 'https://restcountries.com/v3/all';

const getCountries = async ()=>{
  try{
let result = [];
result = await Country.findAll({include:Activities})
if (result?.length){
  console.log(result)
return result
}


  const get = await axios.get(url)  
  const allUrlCountries = await get.data.map( e => {
    return{
      id : e.cca3,
      name: e.name.common,
      flags: e.flags[1],
      continents: e.continents[0],
      capital: e.capital || e.capital?.length === 1 ? e.capital[0] : e.capital?.join(',') ||  ['No tiene capital'],
      subregion: e.subregion || ['No hay datos de subregión'],
      area: e.area,
      population: e.population
    };
  });

  result= await Country.bulkCreate(allUrlCountries)
  return result;
}  catch(error) {
    throw new Error(error.message)
}
}
module.exports = getCountries