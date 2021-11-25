module.exports = (mongoose) => {
    EmpSchema = new mongoose.Schema({
        BRANCH: {
            type: String,
            required: true
        },
        PERSONAL_CODE: {
            type: Number,
            required: true
        },
        PERSONAL_ID: {
            type: mongoose.ObjectId,
            required: true
        },
        POST_CODE: {
            type: Number,
        },
        PRIZ_SYSTEM: {
            type: Number,
            enum: [1, 2]
        },
        OFFICE_NAME: {
            type: String
        },
        IN_OFFICE_DATE: {
            type: Number,
        }
    },
        {
            toJSON: {
                virtuals: true
            }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
            toObject: {
                virtuals: true
            }
        }
    );

    EmpSchema.virtual('post', {
        ref: 'Post',
        localField: 'POST_CODE',
        foreignField: 'ID',
        justOne: true
    });

    return mongoose.model('Employment', EmpSchema)
}