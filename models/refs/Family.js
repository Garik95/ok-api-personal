module.exports = (mongoose, pre) => {
    const FamilySchema = new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        FAM_ID: {
            type: String,
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
        STATUS: {
            type: Number, enum: [0, 1], default: 1
        },
    });


    return mongoose.model(pre + 'Family', FamilySchema)
}