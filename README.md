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
│   └── 'htmlLoader.js' // Custom loader for esbuild
├── src/
│   ├── app/ // Frontend Javascript
│   │   ├── admin/ // React Admin Application
│   │   ├── contact/ // Svelte Contact Application
│   ├── http/ // Arc HTTP endpoints
│   ├── style/ // Site wide css
│   ├── types/ // Typings for project
│   └── views/ // Shared code for GET http requests
├── '.gitignore' // Ignore files from SCM
├── 'app.arc' // Architect config
├── 'jest.config.js' // Jest testing config
├── 'package-lock.json' // Dependency locking
├── 'package.json' // Project dependencies, scripts, etc
├── 'preferences.arc' // *Ignored from git, defines secrets
├── 'README.md' // This file
├── 'tailwind.config.js' // Tailwind CSS config
├── 'tsconfig.json' // Project Typescript config
└── 'typings.d.ts' // Project declaration file
```

### Deploying

More coming soon...
