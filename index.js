// initializing express
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const causeController = require('./controllers/suggested-cause')
// const methodOverride = require('method-override')

// set up view engine
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// set up static files (ex- images, css, anything we want public)
app.use(express.static(__dirname + '/public'))

// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

// // routes
// app.use(causeController)
// first route! home route
app.get('/', (req,res) => {
    // res.send('home route finally')
    console.log('home route!')
    res.render('index', {name: 'Kirsten', color: 'glitter'})
})
// causes route
app.get('/causes', (req,res) => {
    console.log('causes route!')
    res.render('causes', {})
})
// restaurants route
app.get('/restaurants', (req,res) => {
    console.log('restaurants route!')
    res.render('restaurants', {})
})
// locations route
app.get('/locations', (req,res) => {
    console.log('locations route!')
    res.render('locations', {})
})
// suggested causes get route
app.get('/suggestedcauses', (req, res) => {
    console.log('suggested causes route!')
    res.render('suggested-causes', {})
})
// suggested causes post route
app.post('/suggestedcauses', (req, res) => {
    console.log('can we post!?')
    res.render('suggested-causes', {})
})
// port 
app.listen(3000, () => console.log("running circles on port 3000"))