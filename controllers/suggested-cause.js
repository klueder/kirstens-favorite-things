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
// form for new suggested causes get route
router.get('/suggestedcauses/new', (req, res) => {
    console.log('new suggested cause route!')
    res.render('new-suggested-causes', {})
})
// create/post route for suggested causes, except hopefully this one works
router.post('/suggestedcauses', (req, res) => {
    new SuggestedCause ({
        organization : req.body.Organization,
        website : req.body.Website,
        cause : req.body.Cause,
        founded : req.body.Founded,
        location : req.body.Location,
        info : req.body.Info
    }).save((err,suggcause) => {
        if(err) res.json(err);
        else res.send("New Cause has been suggested!")
    })
})
// list of suggested causes get route
// router.get('/allsuggestedcauses', (req, res) => {
//     SuggestedCause.find({}, (err, suggcauses)) {
//         console.log("\nSuggestedCauses !")
//         console.log(suggcauses)
//         renderResult(res, suggcauses, "Suggested Causes List : ")
//     })
//     console.log('suggested causes route!')
//     res.send("not where we wanted to be")
// }

router.get('/allsuggestedcauses', (req,res) => {
    SuggestedCause.find({}, (err, suggcauses) => {
    console.log("\nSuggestedCauses !");
    console.log(suggcauses); 
    renderResult(res, suggcauses, "Suggested Causes :");
});});

function renderResult(res, suggcauses, msg) {
  res.render('suggested-causes', {message:msg, suggestedcauses:suggcauses},
    function(err, result) {
      if (!err) {res.end(result);}
      else {res.end('Oops ! An error occurred.');
        console.log(err);}
});}

module.exports = router