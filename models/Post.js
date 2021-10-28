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
            type: Number,
            required: true
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
            type: Number,
            required: true
        }

    });

    PostSchema.virtual('region', {
        ref: 'Region',
        localField: 'REGIONID',
        foreignField: 'REGION_ID'
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