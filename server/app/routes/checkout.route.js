module.exports = app => {
    const checkout = require('../controllers/checkout.controller.js')
    const router = require('express').Router()

    router.post('/', checkout.create)
    
    router.get('/', checkout.findAll)

    app.use('/api/checkout', router)
}
