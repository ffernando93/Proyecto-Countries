const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getActivities = require('./getActivities')
const postActivities = require('./postActivities')
const getAllCountries = require ('./getAllCountries')
const getCountriesId = require ('./getCountriesId')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/all', getAllCountries)
router.use('/country', getCountriesId)
router.use('/activity', getActivities)
router.use('/activities', postActivities)

module.exports = router;
