/**
 * Jobs seeds for database
 *
 * WIP with access patterns...
 */
const { faker } = require('@faker-js/faker')
const { employers } = require('./employers')

const jobWIP = {
    PK: '<id>',
    SK: 'JOB',
    GSI1PK: 'JOB#<status>',
    GSI1SK: '<expires>',
    GSI2PK: 'EMPLOYER#<id>',
    GSI2SK: 'JOB#<status>',
    // Other attributes
}

const employerWIP = {
    PK: '<id>',
    SK: 'EMPLOYER',
    GSI1PK: 'EMPLOYER',
    GSI1SK: '<status>',
    // Other attributes
}

const userWIP = {
    PK: '<id>',
    SK: 'USER',
    GSI2PK: 'EMPLOYER#<id>',
    GSI2SK: 'USER#<role>', // role?
    // Other attributes
}

/**
 * Job
 *
 * Access Patterns
 * - Get Job by id | PK = <id> and SK = JOB
 * - Get active public jobs | GSI1PK = JOB#ACTIVE and GSI1SK > <todays date>
 * - Get all jobs | GSI4PK = JOB
 */
const jobExample = {
    PK: '<id>', // 32d3a
    SK: '<type>', // JOB (GSI-4 PK)
    title: '<string>', // Retail Sales Associate
    industry: '<string>', // Clothing
    description: '<string>', // This position does stuff with selling clothes
    type_status: '<type>#<status>', // JOB#ACTIVE (GSI-1 PK) (GSI-2 PK) (GSI-3 SK)
    expires: '<string>', // 2022-11-25 (GSI-1 SK)
    employer: '<type>#<id>', // EMPLOYER#293bc (GSI-3 PK)
}

/**
 * Employer
 *
 * Access Patterns
 * - Get employer by id | PK = <id> and SK = EMPLOYER
 * - Get all jobs by employer | GSI3PK = EMPLOYER#293bc and begins_with(GSI3SK, JOB#)
 * - Get all employers | GSI4PK = EMPLOYER
 */
const employerExample = {
    PK: '<id>', // 293bc
    SK: '<type>', // EMPLOYER (GSI 4 PK)
    title: '<string>', // Sunflower Electic
    description: '<string>', // We provide power and stuff
    type_status: '<type>#<status>', // EMPLOYER#ACTIVE (GSI 2 PK) (GSI 3 SK)
}

/**
 * User
 *
 * Access Patterns
 * - Get user by id | PK = <id> and SK = USER
 * - Get all users for employer | GSI3PK = EMPLOYER#293bc and begins_with(GSI3SK, USER#)
 * - Get all users | GSI4PK = USER
 */
const userExample = {
    PK: '<id>', // 19c4a
    SK: '<type>', // USER (GSI 4 PK)
    firstName: '<string>', // Garrett
    lastName: '<string>', // Bland
    type_status: '<type>#<status>', // USER#ACTIVE (GSI 2 PK) (GSI 3 SK)
}

const JOB_STATUS = ['ACTIVE', 'EXPIRED', 'INACTIVE', 'ARCHIVED']
const EMPLOYER_IDs = employers.map((employer) => employer.PK)

const jobs = [...Array(50)].map(() => {
    const jobStatus = faker.helpers.arrayElement(JOB_STATUS)
    return {
        PK: faker.datatype.uuid(), // unique id
        SK: 'JOB', // type
        GSI1PK: `JOB#${jobStatus}`, // type#<status>
        GSI1SK: faker.date.soon(), // expires
        GSI2PK: `EMPLOYER#${faker.helpers.arrayElement(EMPLOYER_IDs)}`, // employer#<employer id>
        GSI2SK: `JOB#${jobStatus}`, // job#<status>
        title: faker.name.jobTitle(), // job title
    }
})

module.exports = {
    jobs,
}

// module.exports = [
//     {
//         PK: 'JOB#1234', // Item <type>#<id>
//         SK: 'ACTIVE',
//         title: 'Retail Sales Associate', // Job Title
//         GSI1PK: 'EMPLOYER#1231', // Employer
//         GSI1SK: 'JOB', // Type
//         GSI2PK: 'ACTIVE', // Status
//         GSI2SK: '2022-11-25', // Expires
//     },
//     {
//         PK: 'JOB#1919',
//         SK: 'ACTIVE',
//         title: 'Grocery Manager',
//         GSI1PK: 'EMPLOYER#1231',
//         GSI1SK: 'JOB#1919',
//     },
//     {
//         PK: 'JOB#2929',
//         SK: 'ACTIVE',
//         title: 'Truck Driver',
//         GSI1PK: 'EMPLOYER#6651',
//         GSI1SK: 'JOB#2929',
//     },
//     {
//         PK: 'USER#1122',
//         SK: 'ACTIVE',
//         title: 'Truck Driver',
//         GSI1PK: 'EMPLOYER#1231',
//         GSI1SK: 'USER#2929',
//     },
//     {
//         PK: 'JOB#1234',
//         SK: 'ACTIVE',
//         title: 'Retail Sales Associate',
//         GSI1PK: 'EMPLOYER#1231',
//         GSI1SK: 'JOB#1234',
//         GSI2PK: 'JOB#ACTIVE',
//         GSI2SK: '2022-01-05',
//     },
// ]
