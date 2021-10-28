module.exports = (mongoose) => {
    return mongoose.model('Region', new mongoose.Schema({
        ID: {
            type: Number
        },
        NAME: {
            type: String,
            required: true
        },
        STATUS: {
            type: Number,
            enum: [0, 1],
            default: 1
        }
    }))
}