const { spawn, exec } = require('child_process')

/**
 * Default config arguments
 */
const DEFAULT_CONFIG = {
    update: () => null,
}

/**
 * Spawns the tailwindcss watcher. Used for local sandbox development
 */
const startWatcher = (config = DEFAULT_CONFIG) => {
    /**
     * Some initial values
     */
    const { update } = config
    let initialBuild = true

    /**
     * Tailwind CLI process to start
     */
    const watcherProcess = spawn('npx', [
        'tailwindcss',
        '--input',
        './src/plugins/tailwindcss/style.css',
        '--output',
        './public/style.css',
        '--config',
        './src/plugins/tailwindcss/tailwind.config.js',
        '--watch',
    ])

    /**
     * Update with any output not captured such as warnings
     * about updating tailwind versions, etc.
     */
    watcherProcess.stdout.on('data', (data) => {
        update?.status(String(data).trim())
    })

    /**
     * If there is an unexpected tailwind cli error, show user
     */
    watcherProcess.on('exit', (code) => {
        if (code === null) return
        date?.error(`CLI closed unexpectedly with code ${code}`)
        process.exit()
    })

    /**
     * Return a new promise to be async/awaited outside of this module.
     */
    return new Promise((resolve) => {
        /**
         * Tailwind CLI displays info using 'stderr' stream. So when
         * new data is passed to the 'on' listener, we can fire the
         * callback below.
         */
        watcherProcess.stderr.on('data', (data) => {
            /**
             * Set line to data outputted from Tailwind CLI
             */
            const line = String(data).trim()

            if (line === 'Rebuilding...') {
                /**
                 * Call 'start' method to show loading indicator.
                 */
                update?.start(line)
                return
            }

            if (line.startsWith('Done in')) {
                /**
                 * If initial build, then resolve the promise with the
                 * watcher process to be used outside of this file.
                 */
                if (initialBuild) {
                    initialBuild = false
                    update?.done(line.replace('Done in ', 'Built in '))
                    resolve(watcherProcess)
                    return
                }

                /**
                 * Not initial build, show user Tailwind CLI stats
                 */
                update?.done(line.replace('Done in ', 'Rebuilt in '))
                return
            }

            /**
             * If there is something that Tailwind CLI chatters about
             * during the watch process, it will be shown to the user.
             */
            update?.status(line)
        })
    })
}

/**
 * Build and minify tailwind css file
 */
const build = (config = DEFAULT_CONFIG) => {
    const { update } = config

    return new Promise((resolve) => {
        //update?.start('Starting tailwind build for production')

        exec(
            [
                'tailwindcss',
                '--input',
                './src/plugins/tailwindcss/style.css',
                '--output',
                './public/style.css',
                '--config',
                './src/plugins/tailwindcss/tailwind.config.js',
                '--minify',
            ].join(' '),
            (error, stdout, stderr) => {
                if (error) {
                    update?.error(error)
                }
                resolve()
                // update?.done('Built minified tailwind css for production')
            }
        )
    })
}

module.exports = {
    startWatcher,
    build,
}
