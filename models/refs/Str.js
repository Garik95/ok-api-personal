module.exports = (mongoose,pre) => {
    return mongoose.model(pre + 'Str', new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        CODE_STR: {
            type: String
        },
        CHAR_CODE: {
            type: String
        },
        ALPHA_3: {
            type: String
        },
        NAME: {
            type: String
        },
        COD: {
            type: String
        },
        SNG: {
            type: String
        },
        DATE_OPEN: {
            type: Number
        },
        DATE_CLOSE: {
            type: Number
        },
        STATUS: {
            type: Number,enum:[0,1],default:1
        },
    }))
}