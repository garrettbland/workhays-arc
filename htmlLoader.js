module.exports = {
    process(sourceText, sourcePath, config, options) {
        console.log('Using custom loader...')
        console.log(sourceText)
        const escapedSrc = sourceText.replace(/`/g, '\\`').replace(/\$(?=\{.*?\})/g, '\\$')
        return {
            code: `module.exports = \`${escapedSrc}\``,
        }
    },
}
