module.exports = (mongoose) => {
    return mongoose.model('PostGroup', new mongoose.Schema({
        ID: {
            type: Number
        },
        NAME: {
            type: String,
            required: true
        }
    }))
}