const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({message:'CC16 Solo API!!'})
})

routes.get('/api', (req, res) => {
    return res.json({message:'mountains!'})
})



module.exports = routes;