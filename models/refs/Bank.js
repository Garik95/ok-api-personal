module.exports = (mongoose,pre) => {
    const BankSchema = new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        BANK_TYPE: {
            type: String
        },
        BANK_NAME: {
            type: String
        },
        CODE_STR: {
            type: String
        },
        ACC_CODE: {
            type: String
        },
        DATE_OPEN: {
            type: Number
        },
        DATE_CLOSE: {
            type: Number
        },
        DATE_ACT: {
            type: Number
        },
        DATE_DEACT: {
            type: Number
        },
        ACT: {
            type: String
        },
    })

    return mongoose.model(pre + 'Bank',BankSchema);
}