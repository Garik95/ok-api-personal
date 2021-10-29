module.exports = (mongoose, pre) => {
    return mongoose.model(pre + 'EducationType', new mongoose.Schema({
        EDUCATION_ID: {
            type: Number,
            required: true
        },
        EDUCATION_CODE: {
            type: Number,
            required: true
        },
        EDUCATION_NAME: {
            type: String,
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