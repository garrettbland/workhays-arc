import { writeFileSync } from 'fs'
import { employers } from './employers'
import { jobs } from './jobs'

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
writeFileSync('sandbox-seed.json', data)
