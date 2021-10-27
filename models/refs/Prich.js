module.exports = (mongoose) => {
    return mongoose.model('Prich', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        PRICH_ID: {
            type: String
        },
        NAME_PR: {
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