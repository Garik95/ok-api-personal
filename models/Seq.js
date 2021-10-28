module.exports = (mongoose) => {
    return mongoose.model('Seq', new mongoose.Schema({
        COLNAME: {
            type: String,
            required: true
        },
        ITER:{
            type: Number,
            required: true
        }
    }))
}