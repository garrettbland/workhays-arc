module.exports = {
    process(sourceText, sourcePath, config, options) {
        const escapedSrc = sourceText.replace(/`/g, '\\`').replace(/\$(?=\{.*?\})/g, '\\$')
        return {
            code: `module.exports = \`${escapedSrc}\``,
        }
    },
}
