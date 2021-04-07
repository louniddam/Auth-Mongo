const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignUpModels')
const brcypt = require('bcrypt')

router.post('/signup', async (req,res) => {

    const salt = await brcypt.genSalt(10)
    const securePassword = await brcypt.hash(req.body.password, salt)

    const singedUpUser = new signupTemplateCopy({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: securePassword,
    })
    singedUpUser.save()
    .then( data => {
        res.json(data)
    })
    .catch( error => {
        res.json(error)
    })
})

module.exports = router