const express = require('express')
const router = express.Router()

const SuggestedCause = require('../models/cause-model')

// routes

// first route! home route
// router.get('/', (req,res) => {
//     console.log('home route!')
//     res.render('index.ejs', {name: 'Kirsten', color: 'glitter'})
// })
// // causes route
// router.get('/causes', (req,res) => {
//     console.log('causes route!')
//     res.render('causes', {})
// })
// // restaurants route
// router.get('/restaurants', (req,res) => {
//     console.log('restaurants route!')
//     res.render('restaurants', {})
// })
// // locations route
// router.get('/locations', (req,res) => {
//     console.log('locations route!')
//     res.render('locations', {})
// })
// // suggested causes get route
// router.get('/suggestedcauses', (req, res) => {
//     console.log('suggested causes route!')
//     res.render('suggested-causes', {})
// })
// // suggested causes post route
// router.post('/suggestedcauses', (req, res) => {
//     console.log('can we post!?')
//     res.render('suggested-causes', {})
// })







router.get('/suggestedcauses', (req,res) => {
    SuggestedCause.find({})
    .then(suggestedcauses => {
        res.render('index', {suggestedcauses})
    })
})

module.exports = router