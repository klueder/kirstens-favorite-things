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
        else res.redirect('/allsuggestedcauses')
    })
})
// list of all suggested causes
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
      else {res.send('Oops ! An error occurred.');
        console.log(err);}
});}
// one suggested cause by id
router.get('/allsuggestedcauses/:id', (req, res) => {
    const routeId = req.params.id
    SuggestedCause.findById(routeId)
    .then (suggcause => {
        res.render('one-sugg-cause', {suggcause})
    })
    .catch(err => {
        console.log(`error during lookup of ID: ${routeId}`)
        res.send("whoops nothing here")
    })
})
// update suggested cause route
router.get('/allsuggestedcauses/:id/edit', (req, res) => {
    console.log('edit time!')
    const routeId = req.params.id
    SuggestedCause.findById(routeId)
        .then(suggcause => {
            console.log(suggcause)
            res.render('edit-sugg-cause', {suggcause})
        })
})
// updated suggested cause
router.put('/allsuggestedcauses/:id', (req, res) => {
    console.log('edited cause!')
    const routeId = req.params.id
    SuggestedCause.findOneAndUpdate(
        {_id: routeId},
        {
            organization: req.body.organization,
            website: req.body.website,
            cause: req.body.cause,
            founded: req.body.founded,
            location: req.body.location,
            info: req.body.info
        },
        {new: true},
    )
        .then(() => {
            res.redirect('/allsuggestedcauses')
        })
})

// delete suggested cause route
router.delete('/allsuggestedcauses/:id', (req, res) => {
    console.log('delete!')
    const routeId = req.params.id
    SuggestedCause.findByIdAndDelete(
        {_id: routeId}
    )
    .then( result => {
        console.log(result)
        res.redirect('/allsuggestedcauses')
    })
})

// my favorite things routes
// causes
router.get('/causes/aclu', (req, res) => {
    console.log('aclu!')
    res.render('../views/causes/aclu.ejs')
})
router.get('/causes/nami', (req, res) => {
    console.log('nami!')
    res.render('../views/causes/nami.ejs')
})
router.get('/causes/pp', (req, res) => {
    console.log('pp!')
    res.render('../views/causes/pp.ejs')
})
router.get('/causes/trevor', (req, res) => {
    console.log('trevor!')
    res.render('../views/causes/trevor.ejs')
})
router.get('/causes/wwf', (req, res) => {
    console.log('wwf!')
    res.render('../views/causes/wwf.ejs')
})
// locations
router.get('/locations/captiva', (req, res) => {
    console.log('captiva!')
    res.render('../views/locations/captiva.ejs')
})
router.get('/locations/chicago', (req, res) => {
    console.log('chicago!')
    res.render('../views/locations/chicago.ejs')
})
router.get('/locations/keystone', (req, res) => {
    console.log('keystone!')
    res.render('../views/locations/keystone.ejs')
})
router.get('/locations/stlouis', (req, res) => {
    console.log('st. louis!')
    res.render('../views/locations/stlouis.ejs')
})
// restaurants
router.get('/restaurants/tutu', (req, res) => {
    console.log('tutu tango!')
    res.render('../views/restaurants/tutu.ejs')
})
router.get('/restaurants/tavern', (req, res) => {
    console.log('town tavern!')
    res.render('../views/restaurants/tavern.ejs')
})
router.get('/restaurants/ale-house', (req, res) => {
    console.log('mountain melt!')
    res.render('../views/restaurants/ale-house.ejs')
})
module.exports = router