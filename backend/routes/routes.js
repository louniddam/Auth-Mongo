const express = require('express')
const router = express.Router()
const signupTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (req,res) => {
    const singedUpUser = new signupTemplateCopy({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
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