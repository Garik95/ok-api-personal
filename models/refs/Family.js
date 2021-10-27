module.exports = (mongoose) => {
    const FamilySchema = new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        FAM_ID: {
            type: String
        },
        FAM_NAME: {
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
    });
    return mongoose.model('Family',FamilySchema)
}