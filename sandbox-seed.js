/**
 * Database seed/mock file. Local sandbox use of DynamoDB
 * uses Dynalite (in memory storage) and does not persist.
 * This file populates our database so we can develop happily
 * with pre-setup data.
 */

module.exports = {
    workhays: [
        {
            PK: 'JOB#1234',
            SK: 'ACTIVE',
            title: 'Retail Sales Associate',
            GSI1PK: 'EMPLOYER#1231',
            GSI1SK: 'JOB#1234',
        },
        {
            PK: 'JOB#1919',
            SK: 'ACTIVE',
            title: 'Grocery Manager',
            GSI1PK: 'EMPLOYER#1231',
            GSI1SK: 'JOB#1919',
        },
        {
            PK: 'JOB#2929',
            SK: 'ACTIVE',
            title: 'Truck Driver',
            GSI1PK: 'EMPLOYER#6651',
            GSI1SK: 'JOB#2929',
        },
        {
            PK: 'USER#1122',
            SK: 'ACTIVE',
            title: 'Truck Driver',
            GSI1PK: 'EMPLOYER#1231',
            GSI1SK: 'USER#2929',
        },
    ],
}
