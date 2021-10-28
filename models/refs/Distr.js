module.exports = (mongoose,pre) => {
    const DistrSchema = new mongoose.Schema({
        NCI_ID: {
            type: String
        },
        DISTR: {
            type: String
        },
        DISTR_NAME: {
            type: String
        },
        REGION_ID: {
            type: String,
            ref: 'Region'
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
    })

    DistrSchema.virtual('region', {
        ref: 'Region',
        localField: 'REGION_ID',
        foreignField: 'REGION_ID'
    });
    return mongoose.model(pre + 'Distr', DistrSchema)
}