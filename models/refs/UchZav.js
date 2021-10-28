module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'UchZav', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        ZAV_ID: {
            type: String
        },
        ZAV_NAME: {
            type: String
        },
        Z_TYPE: {
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