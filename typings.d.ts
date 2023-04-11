/**
 * Declares .html files as a string so we can import
 * html files directly into our .ts files and use the
 * content as a string and avoid any file reads.
 */
declare module '*.html' {
    const value: string
    export default value
}
