module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'Post', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        DOLJ_ID: {
            type: String
        },
        DOLJ_NAME: {
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