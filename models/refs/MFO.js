module.exports = (mongoose, pre) => {
    const MFOSchema = new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        BANK_ID: {
            type: String
        },
        BANK_TYPE: {
            type: String
        },
        REGION_ID: {
            type: String
        },
        HEADER_ID: {
            type: String
        },
        BANK_NAME: {
            type: String
        },
        BANK_ADDRESS: {
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
    }, {
        toJSON: {
            virtuals: true
        }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: {
            virtuals: true
        } // So `console.log()` and other functions that use `toObject()` include virtuals 
    });

    MFOSchema.virtual('region', {
        ref: 'ref-Region',
        localField: 'REGION_ID',
        foreignField: 'REGION_ID',
        justOne: true
    });
    return mongoose.model(pre + 'MFO', MFOSchema)
}