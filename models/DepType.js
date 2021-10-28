module.exports = (mongoose) => {
    return mongoose.model('DepType', new mongoose.Schema({
        ID: {
            type: Number,
            required: true
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