const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    }
});

newsletterSchema.pre(`save`, function(next) {
    if (this.isModified()) this.updated = Date.now();
    if (this.isModified(`title`)) {
        this.slug = this.title.split(' ').join('-').toLowerCase();
    }
    next();
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);
module.exports = Newsletter;