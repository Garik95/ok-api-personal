module.exports = (mongoose) => {
    EmpSchema = new mongoose.Schema({
        BRANCH: {
            type: String,
            required: true
        },
        PERSONAL_CODE: {
            type: Number,
            required: true
        },
        PERSONAL_ID: {
            type: mongoose.ObjectId,
            required: true
        },
        POST_CODE: {
            type: Number,
            required: true
        },
        PRIZ_SYSTEM: {
            type: Number,
            required: true,
            enum: [1, 2]
        },
        OFFICE_NAME: {
            type: String
        },
        IN_OFFICE_DATE: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('Employment', EmpSchema)
}