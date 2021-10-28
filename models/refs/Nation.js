module.exports = (mongoose,pre) => {
    return mongoose.model(pre + 'Nation', mongoose.Schema({
        NCI_ID: {
            type: String
        },
        NAT_ID: {
            type: String
        },
        NAT_NAME: {
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
    }))
}