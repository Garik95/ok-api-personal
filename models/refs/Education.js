module.exports = (mongoose, pre) => {
    const EducationSchema = new mongoose.Schema({
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
            type: Number
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
    }, {
        toJSON: {
            virtuals: true
        }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: {
            virtuals: true
        } // So `console.log()` and other functions that use `toObject()` include virtuals
    });
    EducationSchema.virtual('eduType', {
        ref: 'ref-EducationType',
        localField: 'EDUCATION_CODE',
        foreignField: 'EDUCATION_CODE'
    });
    return mongoose.model(pre + 'Education', EducationSchema)
}