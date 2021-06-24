// initializing express
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const causeController = require('./controllers/suggested-cause')
const methodOverride = require('method-override')

// set up view engine
app.set('view engine', 'ejs')
app.use(ejsLayouts)
// set up static files (ex- images, css, anything we want public)
app.use(express.static(__dirname + '/public'))

// app.use(express.bodyParser())
// app.use(express.methodOverride())
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

//  routes
app.use(causeController)

// port 
app.listen(3000, () => console.log("running circles on port 3000"))