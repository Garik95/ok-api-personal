module.exports = (mongoose) => {
    const LangsSchema = new mongoose.Schema({
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
        LANG: {
            type: String,
            required: true
        },
        UROV: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Lang', LangsSchema);
}