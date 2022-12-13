@app
workhays

@http
get /
get /contact
get /jobs/:jobId
get /admin
post /api/contact

@aws
profile architect # local aws named profile used to deploy from local machine
runtime typescript # sets TS as the the default runtime for your entire project
region us-east-2

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
esbuild-config scripts/esbuild.js

# Allows lambdas to share code. Automatically gets copied into all functions
# Usage: import { x } from '@architect/shared/<filename>'
@shared

# Allows lambdas to share view code. Automatically gets copied into GET requests
# Usage: import { x } from '@architect/views/<filename>'
@views

# Dynamo DB Tables
# Working with dynamo database locally stores data in memory using Dynalite
# Options are available for persistant memory or live database's on AWS
@tables
workhays
  PK *String
  SK **String

# Global Secondary Indexes for Dynamo DB Tables
@tables-indexes
workhays
  GSI1PK *String
  GSI1SK **String
  name GSI1

workhays
  GSI2PK *String
  GSI2SK **String
  name GSI2