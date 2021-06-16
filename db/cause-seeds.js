// bring in JSON file, need file extension here
const seedData = require('./cause-seeds.json')
// bring in cause model
const SuggestedCause = require('../models/cause-model')
// remove any pre existing data
SuggestedCause.deleteMany({})
    .then(() => {
        // Insert test data and return it so we can log it in the next .then
        return SuggestedCause.insertMany(seedData)
    })
    // if data insert was successful, we'll see the results in the terminal
    .then(console.log)
    // log the error if the insert didn't work
    .catch(console.error)
    // whether it was successful or not, we need to exit the database
    .finally(() => {
        // close the connection to mongo
        process.exit();
    })