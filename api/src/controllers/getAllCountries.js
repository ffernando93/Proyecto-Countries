const getCountries = require("./getCountries")
const getDbInfo = require("./getDbInfo")


const getAllCountries = async () => {
    const apiInfo = await getCountries();
    const dbInfo = await getDbInfo();
    const infoCountryTotal = apiInfo.concat(dbInfo)
    return infoCountryTotal;
    
  };

  
  module.exports = getAllCountries ;

  