module.exports = (mongoose) => {
    const PersonalSchema = mongoose.Schema({
        FIRST_NAME: {
            type: String,
            required: true
        },
        FAMILY: {
            type: String,
            required: true
        },
        PATRONYMIC: {
            type: String,
            required: true
        },
        FIRST_NAME_LAT: {
            type: String,
            required: true
        },
        FAMILY_LAT: {
            type: String,
            required: true
        },
        PATRONYMIC_LAT: {
            type: String,
            required: true
        },
        GENDER_CODE: {
            type: String,
            enum: [1,2],
            required: true
        },
        EMPLOYMENT_DATE: {
            type: Number,
            required: true,
            default: new Date()
        },
        BRANCH: {
            type: String,
            required: true
        },
        DEPARTMENT_CODE: {
            type: Number,
            required: true
        },
        POST_CODE: {
            type: Number,
            required: true
        },
        BIRTHDAY: {
            type: Number,
            required: true
        },
        PERSONAL_CODE: {
            type: Number,
            required: true
        },
        WORKINGRATE: {
            type: Number,
            required: true
        },
        BIRTHPLACE: {
            type: String,
            required: true
        },
        NATIONALITY_CODE: {
            type: Number,
            required: true
        },
        EDUCATION_TITLE_CODE: {
            type: String,
            required: true
        },
        UCH_STEP_CODE: {
            type: String,
            required: true
        },
        UCH_ZVN_CODE: {
            type: String,
            required: true
        },
        LANGS: {
            type: String,
            required: true
        },
        LANG: {
            type: String,
            required: true
        },
        PRIZES: {
            type: String,
            required: true
        },
        IS_PARTY: {
            type: String,
            required: true
        },
        EMPLOYMENT_DATE_END: {
            type: String,
            required: true
        },
        TEMPORARY_EMPLOYMENT_DATE_END: {
            type: String,
            required: true
        },
        INN: {
            type: String,
            required: true
        },
        NPS_ID: {
            type: String,
            required: true
        },
        PASS_SERIYA: {
            type: String,
            required: true
        },
        PASS_NUM: {
            type: String,
            required: true
        },
        PASS_REG: {
            type: String,
            required: true
        },
        PASS_DATE: {
            type: String,
            required: true
        },
        PASS_DATE_END: {
            type: String,
            required: true
        },
        COD_STR_BIRTH: {
            type: String,
            required: true
        },
        COD_STR_LIVE: {
            type: String,
            required: true
        },
        COD_STR_SITIZENT: {
            type: String,
            required: true
        },
        HOME_ADDRESS_REGION_ID: {
            type: String,
            required: true
        },
        HOME_ADDRESS_DISTR: {
            type: String,
            required: true
        },
        HOME_ADDRESS: {
            type: String,
            required: true
        },
        HOME_ADDRESSFACT_REGION_ID: {
            type: String,
            required: true
        },
        HOME_ADDRESSFACT_DISTR: {
            type: String,
            required: true
        },
        HOME_ADDRESSFACT: {
            type: String,
            required: true
        },
        FAMILY_STATUS_CODE: {
            type: String,
            required: true
        },
        STATUS_CODE: {
            type: String,
            required: true
        },
    });

    PersonalSchema.virtual('branch', {
        ref: 'Branch',
        localField: 'BRANCH',
        foreignField: 'MFO',
        justOne: true
    });

    PersonalSchema.virtual('entity', {
        ref: 'Entity',
        localField: 'DEPARTMENT_CODE',
        foreignField: 'ID',
        justOne: true
    });

    PersonalSchema.virtual('post', {
        ref: 'Post',
        localField: 'POST_CODE',
        foreignField: 'ID',
        justOne: true
    });

    PersonalSchema.virtual('nation', {
        ref: 'ref-Nation',
        localField: 'NATIONALITY_CODE',
        foreignField: 'NAT_ID',
        justOne: true
    });

    PersonalSchema.virtual('obraz', {
        ref: 'ref-Obraz',
        localField: 'EDUCATION_TITLE_CODE',
        foreignField: 'OBR_ID',
        justOne: true
    });

    PersonalSchema.virtual('uchStep', {
        ref: 'ref-UchStep',
        localField: 'UCH_STEP_CODE',
        foreignField: 'ZVN_ID',
        justOne: true
    });

    PersonalSchema.virtual('uchZvn', {
        ref: 'ref-UchZvn',
        localField: 'UCH_ZVN_CODE',
        foreignField: 'ZVN_ID',
        justOne: true
    });
//  under question
    // PersonalSchema.virtual('langs', {
    //     ref: 'ref-Lang__s',
    //     localField: 'LANGS',
    //     foreignField: 'LANG_ID',
    //     justOne: true
    // });

    // PersonalSchema.virtual('lang', {
    //     ref: 'ref-Lang',
    //     localField: 'LANG',
    //     foreignField: 'UROV_ID',
    //     justOne: true
    // });

    // PersonalSchema.virtual('prize', {
    //     ref: 'ref-Lang',
    //     localField: 'LANG',
    //     foreignField: 'UROV_ID',
    //     justOne: true
    // });

    PersonalSchema.virtual('party', {
        ref: 'ref-Party',
        localField: 'IS_PARTY',
        foreignField: 'PART_ID',
        justOne: true
    });

    PersonalSchema.virtual('familyStatus', {
        ref: 'ref-FamilyStatus',
        localField: 'FAMILY_STATUS_CODE',
        foreignField: 'FAMILY_STATUS_CODE',
        justOne: true
    });

    PersonalSchema.virtual('birth', {
        ref: 'ref-Str',
        localField: 'COD_STR_BIRTH',
        foreignField: 'CODE_STR',
        justOne: true
    });

    PersonalSchema.virtual('live', {
        ref: 'ref-Str',
        localField: 'COD_STR_LIVE',
        foreignField: 'CODE_STR',
        justOne: true
    });

    PersonalSchema.virtual('citizen', {
        ref: 'ref-Str',
        localField: 'COD_STR_LIVE',
        foreignField: 'COD_STR_SITIZENT',
        justOne: true
    });

    PersonalSchema.virtual('addrRegion', {
        ref: 'ref-Region',
        localField: 'HOME_ADDRESS_REGION_ID',
        foreignField: 'REGION_ID',
        justOne: true
    });

    PersonalSchema.virtual('addrFactRegion', {
        ref: 'ref-Region',
        localField: 'HOME_ADDRESSFACT_REGION_ID',
        foreignField: 'REGION_ID',
        justOne: true
    });

    PersonalSchema.virtual('addrDistr', {
        ref: 'ref-Distr',
        localField: 'HOME_ADDRESS_DISTR',
        foreignField: 'DISTR',
        justOne: true
    });

    PersonalSchema.virtual('addrFactDistr', {
        ref: 'ref-Distr',
        localField: 'HOME_ADDRESSFACT_DISTR',
        foreignField: 'DISTR',
        justOne: true
    });

    // WORKINGRATE
    // LANGS
    // LANG
    // PRIZES
    return mongoose.model('Personal', PersonalSchema)
}