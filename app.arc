@app
workhays

@http
get /
get /admin

@aws
profile architect
runtime typescript # sets TS as the the default runtime for your entire project
region us-east-2
architecture arm64

# Defines static files that will be uploaded to s3
# prune will automatically remove assets from S3 bucket not found in the static 
@static
folder public
prune true

# Adds support for typescript to arc. Builds files use ESbuild and output to ./.build
@plugins
architect/plugin-typescript

# Typescript esbuild config location
@typescript
esbuild-config esbuild.js

# Allows lambdas to share code. Automatically gets copied into all functions
# Usage: import { x } from '@architect/shared/<filename>'
@shared

# Allows lambdas to share view code. Automatically gets copied into GET requests
# Usage: import { x } from '@architect/views/<filename>'
@views