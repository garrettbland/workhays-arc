/**
 * Custom Esbuild configuration. A custom loader for .html files
 * is added to be treated as text, rather than a raw file. This way
 * the contents get bundled directly into the build js files for
 * Lambdas to execute. We don't need to read any files this way as well.
 *
 * The
 */
module.exports = {
    loader: { '.html': 'text' },
    watch: true,
}
