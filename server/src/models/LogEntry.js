const mongoose = require('mongoose');

const { Schema } = mongoose;
const required_string = {
    type: String,
    required: true,
};

const required_number = {
    type: Number,
    required: true,
};

// const default_date = {
//     type: Date, default: Date.Now,
// }

const LogEntrySchema = new Schema({
    title: required_string,
    
    description: String,

    comments: String,

    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    image: String,

    latitude: {
        ...required_number,
        min: -90,
        max: 90,
    },
    longitude:{
        ...required_number,
        min: -180,
        max: 180,
    },
    visit_date: {
        type: Date,
        required: true,
    },
    // created_at: default_date,
    // updated_at: default_date,
    
},
{
    timestamps: true,   
});

const logEntry = mongoose.model('LogEntry', LogEntrySchema);

module.exports = logEntry;