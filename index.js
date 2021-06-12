const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
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

// first route! home route
app.get('/', (req,res) => {
    // res.send('home route finally')
    console.log('here too!?')
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
// port 
app.listen(3000, () => console.log("running circles on port 6000"))