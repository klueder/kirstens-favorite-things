const express = require('express')
const router = express.Router()

const SuggestedCause = require('../models/cause-model')

// routes

// first route! home route
router.get('/', (req,res) => {
    console.log('home route!')
    res.render('index.ejs', {name: 'Kirsten', color: 'glitter'})
})
// causes route
router.get('/causes', (req,res) => {
    console.log('causes route!')
    res.render('causes', {})
})
// restaurants route
router.get('/restaurants', (req,res) => {
    console.log('restaurants route!')
    res.render('restaurants', {})
})
// locations route
router.get('/locations', (req,res) => {
    console.log('locations route!')
    res.render('locations', {})
})
// list of suggested causes get route
router.get('/suggestedcauses', (req, res) => {
    console.log('suggested causes route!')
    SuggestedCause.find({})
    .then(suggestedcauses => {
        res.render('suggested-causes', {suggestedcauses})
    })
})
// form for new suggested causes get route
router.get('/suggestedcauses/new', (req, res) => {
    console.log('new suggested cause route!')
    res.render('new-suggested-causes', {})
})
// create/post route for suggested causes
router.post('/suggestedcauses', (req, res) => {
    console.log('can we post!?')
    SuggestedCause.create(req.body)
        .then((suggestedcause) => {
            res.redirect('/suggestedcauses');
        })
        .catch(err => {
            res.send(`error`)
        });
    // res.render('new-suggested-causes', {})
})







// router.get('/suggestedcauses', (req,res) => {
//     SuggestedCause.find({})
//     .then(suggestedcauses => {
//         res.render('index', {suggestedcauses})
//     })
// })

module.exports = router