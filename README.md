# Work Hays

[Work Hays](https://workhays.com)

### About

Work Hays is a free to use job listing site for Hays, Kansas and the surrounding area.

### Development

Getting started instructions coming soon...

### Project Layout

```js
├── public/ // Public files that are copied to s3 bucket
├── src/
│   ├── http/ // Arc HTTP endpoints
│       └── get-catchall/ // React SSR
│   ├── types/ // Typings for project
│   ├── plugins/ // Arc local plugins
│       └── seed-database/ // Add's fake data for development
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

### Environment Variables

Create a `preferences.arc` file in the root directory. This file is ignored by git and is not commited. The `@env` pragma is used so we can use different environment variables for different environment. Example below.

```
# preferences.arc

@env
testing
  ARC_APP_SECRET "dsfdfsa012864"

staging
  ARC_APP_SECRET "sdf9023490ds"

production
  ARC_APP_SECRET "dfskdsf02032"
```

### Development

To get startd, clone this repo, run `npm install`, and then `npm run dev`. This will start the local Arc sandbox running a local dynamo database with faked data (see `src/plugins/seed-database` plugin) and local http endpoints. This also starts the web app proceccesses (client side bundle, css files, etc) and will rebuild when there are changes.

### How the web applications works

Coming soon...Will give more details on React SSR

### Idea

/src/http/get-catchall/

-   index.js

    -   Router checks for "/" or "/jobs/<id>"
    -   Routes are defined by grabbing files in "/pages" (file based routing)
    -   Each route is wrapped by a client/server 'App.tsx', with a script tag pointing to <filename>-main.js (or whatever matches the parcel built js file)

-   /pages/index.tsx
    -   This is the home page. It's an exported JSX component
    -   This is also an entry point for parcel. It will build out <filename>-main.js or somethiing specific. Basically a JS file for each route
    -   There should be a JS file in here that checks for 'window' object, and then hydrates accordingly.
