module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'UchZvn', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        ZVN_ID: {
            type: String
        },
        ZVN_NAME: {
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