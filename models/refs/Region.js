module.exports = (mongoose) => {
    return new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        REGION_ID: {
            type: String
        },
        REGION_NAM: {
            type: String
        },
        DOP_FIELD: {
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
    })
}