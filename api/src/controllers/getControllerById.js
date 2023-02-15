const {Country, Activities} = require("../db")

const getControllById = async (id)=>{
    try {
     let countryDetail = await Country.findOne(
        {where: {id},
        include: Activities 
    })
    console.log(countryDetail)
    return countryDetail;

    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = getControllById;



