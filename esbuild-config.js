module.exports = {
    // loader: { '.html': 'file' },
    loader: { '.html': 'text' },
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        },
    },
}
