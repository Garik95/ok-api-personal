module.exports = (mongoose) => {
    return mongoose.model('MFO', mongoose.Schema({
        NCI_ID: {
            type: String
        },
        BANK_ID: {
            type: String
        },
        BANK_TYPE: {
            type: String
        },
        REGION_ID: {
            type: {type: mongoose.Schema.Types.ObjectId, ref: 'Region'}
        },
        HEADER_ID: {
            type: String
        },
        BANK_NAME: {
            type: String
        },
        BANK_ADDRESS: {
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