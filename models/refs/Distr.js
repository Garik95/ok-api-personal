module.exports = (mongoose) => {
    const DistrSchema = new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        DISTR: {
            type: String
        },
        DISTR_NAME: {
            type: String
        },
        REGION_ID: {
            type: {type: mongoose.Schema.Types.ObjectId, ref: 'Region'}
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
    return mongoose.model('Distr',DistrSchema)
}