module.exports = (mongoose) => {
    const BranchesSchema = mongoose.Schema({
        MFO: {
            type: String,
            required: true
        },
        NAME: {
            type: String,
            required: true
        },
        REGIONID: {
            type: Number,
            required: true
        },
        STATUS: {
            type: Number,
            enum: [0, 1],
            default: 1
        },
        CREATEDAT: {
            type: Number,
        },
        UPDATEDAT: {
            type: Number
        },
        DATECLOSE: {
            type: Number
        },
        ADDRESS: {
            type: String
        }
    }, {
        toJSON: {
            virtuals: true
        }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: {
            virtuals: true
        } // So `console.log()` and other functions that use `toObject()` include virtuals 
    });

    BranchesSchema.virtual('region', {
        ref: 'Region',
        localField: 'REGIONID',
        foreignField: 'REGION_ID',
        justOne: true
    });

    return mongoose.model('Branch', BranchesSchema)
}