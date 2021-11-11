module.exports = (mongoose) => {
    const PrizeSchema = new mongoose.Schema({
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
        PRIZE_NAME: {
            type: String,
            required: true
        },
        PRIZE_YEAR: Number,
        PRIZE_MONTH: Number,
        PRIZE_DAY: Number
    });

    return mongoose.model('Prize', PrizeSchema);
}