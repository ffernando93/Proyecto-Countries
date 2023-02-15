const {Router} = require ('express');
const router = Router()
const getCountries = require ('../controllers/getCountries')

router.get('/', async(req,res)=>{
    const {name} = req.query;
    let countriesTotal = await getCountries();
    if(name){
        let countryName = await countriesTotal.filter(e=> e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        countryName.length? 
        res.status(200).send(countryName): 
        res.status(404).send('No se encontro el pais')
    } else{
        res.status(200).send(countriesTotal)
    }
});
   


module.exports = router;