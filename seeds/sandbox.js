/**
 * Database seed/mock file. Local sandbox use of DynamoDB
 * uses Dynalite (in memory storage) and does not persist.
 * This file populates our database so we can develop happily
 * with pre-setup data.
 */
const jobs = require('./jobs')

module.exports = {
    workhays: [...jobs],
}
