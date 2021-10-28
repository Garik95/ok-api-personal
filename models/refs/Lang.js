module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'Lang', new mongoose.Schema({
        UROV_ID: {
            type: String
        },
        NCI_ID: {
            type: String
        },
        UROV_NAME: {
            type: String
        },
        DATE_OPEN: {
            type: Number
        },
        DATE_CLOSE: {
            type: Number
        },
        STATUS: {
            type: Number,enum:[0,1],default:1
        },
    }))
}