const {Country, Activities} = require("../db")

const createActivity = async (data)=>{
    try {
        const {name, dificult, duration,season, countries} = data

        const createdActivity = await Activities.create({
            name,
            dificult,
            duration,
            season
         });
         let foundCountry = countries.map(async element => {
            return await Country.findOne({
                where:{
                    name:element
                }
            })
         });

         foundCountry.forEach(async element => {
             createdActivity.addCountries(await element);
         });

         return createdActivity
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = createActivity;