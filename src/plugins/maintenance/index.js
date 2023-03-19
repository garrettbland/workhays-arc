const { exec } = require('child_process')
const { updater } = require('@architect/utils')
// const { resolve } = require('path')

const update = updater('Maintenance')

const REMOVE_ITEMS = ['.parcel-cache', 'dist']

module.exports = {
    sandbox: {
        // Startup operations
        start: ({ arc, inventory, invoke }) => {
            update.start('Removing auto generated files & directories...')
            update.status('Removing the following...', ...REMOVE_ITEMS)
            // console.log(inventory.inv._project.cwd)
            exec(`rimraf ${REMOVE_ITEMS}`, (err, stdout, stderr) => {
                if (err) {
                    update.error('Error removing files...')
                }
                // console.log(err)
                // console.log(stdout)
                // console.log(stderr)
            })
            // exec('npx rimraf', ['.parcel-cache', 'dist'], (err, stdout, stderr) => {
            //     console.log(err)
            //     console.log(stdout)
            //     console.log(stderr)
            // })
            update.done('Removed auto generated files & directories...')
        },

        // Project filesystem watcher
        // watcher: async ({ filename, event, inventory, invoke }) => {
        //   // Act on filesystem events within your project
        // },

        // Shutdown operations
        // end: async ({ arc, inventory, invoke }) => {
        //   // Run operations upon Sandbox shutdown
        // },
    },
}
