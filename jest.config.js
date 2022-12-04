// /** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'html'],
    transform: {
        '^.+\\.ts?$': 'esbuild-jest',
        '\\.(html)$': '<rootDir>/scripts/htmlLoader.js',
    },
}
