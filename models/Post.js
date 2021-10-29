module.exports = (mongoose) => {
    const PostSchema = mongoose.Schema({
        POST_ID: {
            type: Number
        },
        POST_ID_CB: {
            type: String
        },
        ID: {
            type: Number,
            required: true
        },
        NAME: {
            type: String,
            required: true
        },
        REGIONID: {
            type: Number
        },
        STATUS: {
            type: Number,
            enum: [0, 1],
            default: 1
        },
        INS_DATE: {
            type: Number
        },
        GROUPID: {
            type: Number
        }

    }, {
        toJSON: {
            virtuals: true
        }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: {
            virtuals: true
        } // So `console.log()` and other functions that use `toObject()` include virtuals 
    });

    PostSchema.virtual('region', {
        ref: 'Region',
        localField: 'REGIONID',
        foreignField: 'ID'
    });

    PostSchema.virtual('refPost', {
        ref: 'ref-Post',
        localField: 'POST_ID_CB',
        foreignField: 'DOLJ_ID'
    });

    PostSchema.virtual('postgroup', {
        ref: 'PostGroup',
        localField: 'GROUPID',
        foreignField: 'ID'
    });

    return mongoose.model('Post', PostSchema)
}