const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    participants: [
        {
            name: { type: String, required: true },
            institution: { type: String, required: true },
            course: { type: String, required: true },
        },
    ],
});

module.exports = mongoose.model('Event', EventSchema);