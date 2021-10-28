module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'Langs', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        LANG_ID: {
            type: String
        },
        LANG_NAME: {
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