const {Router} = require('express');
const getControllById = require('../controllers/getControllerById')
const router = Router();

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const totalCountries = await getControllById(id);
  // if(id){
  //   let countriesID = await totalCountries.filter( c => c.id === id)
  //   countriesID.length ?
  //   res.status(200).json(countriesID) :
  //   res.status(404).send('No se encontró el país')
  // }
  res.status(200).json(totalCountries)
})
  

  module.exports = router;