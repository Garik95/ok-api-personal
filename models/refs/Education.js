module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'Education', new mongoose.Schema({
        INSTITUTION_ID: {
            type: Number,
            required: true
        },
        INSTITUTION_CODE: {
            type: Number,
            required: true
        },
        INSTITUTION_NAME: {
            type: String,
            required: true
        },
        INSTITUTION_ABBREVIATION: {
            type: String
        },
        INSTITUTION_PLACE: {
            type: String
        },
        EDUCATION_CODE: {
            type: Number,
            required: true
        },
        STATUS: {
            type: Number,
            enum: [0, 1],
            default: 1
        },
        EMP_CODE: {
            type: Number
        },
        INS_DATE: {
            type: Number
        }
    }))
}