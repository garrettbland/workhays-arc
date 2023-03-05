# Work Hays

[Work Hays](https://workhays.com)

### About

Work Hays is a free to use job listing site for Hays, Kansas and the surrounding area.

### Development

Getting started instructions coming soon...

### Project Layout

```js
├── public/ // Public files that are copied to s3 bucket
├── scripts/
│   ├── seeds/ // Local sandbox database mocking
│   │   ├── 'employer.ts' // Fake employers
│   │   ├── 'index.ts' // Writes database to ./sandbox-seed.json
│   │   └── 'jobs.ts' // Fake jobs
│   ├── 'esbuild.js' // Custom esbuild config
├── src/
│   ├── http/ // Arc HTTP endpoints
│   ├── types/ // Typings for project
├── '.gitignore' // Ignore files from SCM
├── 'app.arc' // Architect config
├── 'jest.config.js' // Jest testing config
├── 'package-lock.json' // Dependency locking
├── 'package.json' // Project dependencies, scripts, etc
├── 'preferences.arc' // *Ignored from git, defines secrets
├── 'README.md' // This file
├── 'tsconfig.json' // Project Typescript config
└── 'typings.d.ts' // Project declaration file
```

### Adding HTTP Endpoints

1. Add `@http` entry to `app.arc`
2. Run `npx arc init`
    1. Validate that the new directory has been created in `src/http`
    2. From inside the new directory, run `echo "{}" > package.json && touch index.ts`
3. Update new `index.ts` file with some code
4. Start local sandbox to ensure new endpoint is working with `npm run dev`

### Hydrating

During development (`npm run dev`) Arc will hydrate and make sure all functions
have necessary dependencies installed. `npm run hydrate` will copy all shared
code into @http functions. This can be useful for testing or CI.

[arc hydrate docs](https://arc.codes/docs/en/reference/cli/hydrate)

### Deploying

More coming soon...
