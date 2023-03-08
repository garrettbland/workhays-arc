// import { faker } from '@faker-js/faker'
const { faker } = require('@faker-js/faker')

const employerWIP = {
    PK: '<id>',
    SK: 'EMPLOYER',
    GSI1PK: 'EMPLOYER',
    GSI1SK: '<status>',
    // Other attributes
}

const AVAILABLE_STATUSES = ['ACTIVE', 'PENDING']
const employers = [...Array(20)].map(() => {
    const employerStatus = faker.helpers.arrayElement(AVAILABLE_STATUSES)
    return {
        PK: faker.datatype.uuid(), // unique id
        SK: 'EMPLOYER', // type
        GSI1PK: `EMPLOYER`, // type
        GSI1SK: employerStatus, // status
        title: faker.company.name(), // employer name
    }
})

module.exports = {
    employers,
}
