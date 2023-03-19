const { writeFileSync } = require('fs')
const { employers } = require('./employers')
const { jobs } = require('./jobs')

/**
 * Databases defined in app.arc. Each key here must
 * match the database name.
 */
const databases = {
    workhays: [...jobs, ...employers],
}

/**
 * Stringify our databases and their items, and
 * then write to disk, using Arc's default seed
 * filename it checks for.
 */
let data = JSON.stringify(databases)

const seed = () => {
    // TODO: Write plugin and publish and have it validate tables and indexes
    writeFileSync('sandbox-seed.json', data)
}

module.exports = {
    seed,
}
