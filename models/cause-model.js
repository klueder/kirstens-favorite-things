const { mongo } = require('mongoose')
const mongoose = require('../db/connection')

const SuggestedCauseSchema = new mongoose.Schema(
    {
        organization: {
            type: String,
            required: true
        },
        website: String,
        cause: {
            type: String,
            required: true
        },
        founded: Number,
        location: String,
        info: String
    },
    {timestamps: true}
)

const SuggestedCause = mongoose.model('SuggestedCause', SuggestedCauseSchema)

module.exports = SuggestedCause