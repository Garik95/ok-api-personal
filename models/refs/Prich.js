module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'Prich', new mongoose.Schema({
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
        STATUS: {
            type: Number,enum:[0,1],default:1
        },
    }))
}