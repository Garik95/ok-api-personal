module.exports = (mongoose) => {
    return mongoose.model('Obraz', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        OBR_ID: {
            type: String
        },
        OBR_NAME: {
            type: String
        },
        DATE_OPEN: {
            type: Number
        },
        DATE_CLOSE: {
            type: Number
        },
        ACT: {
            type: String
        },
    }))
}