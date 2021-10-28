module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'Region', new mongoose.Schema({
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
        STATUS: {
            type: Number,enum:[0,1],default:1
        },
    }))
}