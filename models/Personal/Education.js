module.exports = (mongoose) => {
    EduSchema = new mongoose.Schema({
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
        INSTITUTION_CODE: {
            type: Number,
            required: true
        }
    })
    return mongoose.model('Education', EduSchema)
}