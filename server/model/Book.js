const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        publishDate: {
            type: Date,
            default: new Date()
        },
        imagePath: String,
        writer: { type: mongoose.Schema.Types.ObjectId, ref: 'Writer' },
        addDate: {
            type: Date,
            default: new Date()
        }

    }
)

module.exports = mongoose.model("Book", BookSchema);