module.exports = (mongoose, pre) => {
    const nationSchema = new mongoose.Schema({
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
        STATUS: {
            type: Number, enum: [0, 1], default: 1
        },
    }, {
        toJSON: {
            virtuals: true
        }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: {
            virtuals: true
        }
    });

    nationSchema.virtual('nation_id').get(function () {
        return Number(this.NAT_ID);
    });

    return mongoose.model(pre + 'Nation', nationSchema)

}