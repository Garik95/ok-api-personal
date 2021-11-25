module.exports = (mongoose) => {
    const FamilySchema = new mongoose.Schema({
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
        RELATION_CODE: {
            type: Number,
            required: true,
            get: (v) => {
                retun `0000` + v;
            }
        },
        RELATION_FAMILY: {
            type: String,
            required: true
        },
        RELATION_NAME: {
            type: String,
            required: true
        },
        RELATION_PATRONYMIC: {
            type: String
        },
        RELATION_BIRTHDAY: {
            type: Number,
            required: true
        },
        MM: {
            type: String
        },
        DD: {
            type: String
        },
        COD_STR_BIRTH: {
            type: Number,
            required: true
        },
        COD_OBL_BIRTH: {
            type: Number
        },
        COD_CITY_BIRTH: {
            type: Number
        }
    }, {
        toJSON: {
            virtuals: true
        }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: {
            virtuals: true
        }
    });

    FamilySchema.virtual('fullname').get(function () {
        return `${this.RELATION_FAMILY} ${this.RELATION_NAME} ${this.RELATION_PATRONYMIC}`;
    });
    
    FamilySchema.virtual('birthday').get(function () {
        return `${this.DD.padStart(2, '0')}.${this.MM.padStart(2, '0')}.${this.RELATION_BIRTHDAY}`;
    });

    FamilySchema.virtual('fam', {
        ref: 'ref-Family',
        localField: 'RELATION_CODE',
        foreignField: 'FAM_ID',
        justOne: true
    });

    FamilySchema.virtual('str', {
        ref: 'ref-Str',
        localField: 'COD_STR_BIRTH',
        foreignField: 'CODE_STR',
        justOne: true
    });

    FamilySchema.virtual('region', {
        ref: 'ref-Region',
        localField: 'COD_OBL_BIRTH',
        foreignField: 'REGION_ID',
        justOne: true
    });

    FamilySchema.virtual('distr', {
        ref: 'ref-Distr',
        localField: 'COD_CITY_BIRTH',
        foreignField: 'DISTR',
        justOne: true
    });



    return mongoose.model('Family', FamilySchema)
}