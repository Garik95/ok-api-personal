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

    BRANCH
    DEPARTMENT_CODE
    POST_CODE
    WORKINGRATE
    NATIONALITY_CODE
    EDUCATION_TITLE_CODE
    UCH_STEP_CODE
    UCH_ZVN_CODE
    LANGS
    LANG
    PRIZES
    IS_PARTY
    COD_STR_BIRTH
    COD_STR_LIVE
    COD_STR_SITIZENT
    HOME_ADDRESS_REGION_ID
    HOME_ADDRESS_DISTR
    HOME_ADDRESSFACT_REGION_ID
    HOME_ADDRESSFACT_DISTR
    FAMILY_STATUS_CODE


    return mongoose.model('Personal', PersonalSchema)
}