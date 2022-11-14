@app
workhays-arc

@http
get /
get /admin

@aws
# profile default
runtime typescript # sets TS as the the default runtime for your entire project
region us-west-2
architecture arm64

@static
folder public
prune true

@plugins
architect/plugin-typescript

@typescript
esbuild-config esbuild-config.js

# Allows lambdas to share code. Automatically gets copied into all functions
# Usage: import { x } from '@architect/shared/<filename>'
@shared

# Allows lambdas to share view code. Automatically gets copied into GET requests
# Usage: import { x } from '@architect/views/<filename>'
@views