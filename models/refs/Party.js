module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'Party', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        PART_ID: {
            type: String
        },
        PART_NAME: {
            type: String
        },
        PART_SOKR: {
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