@app
workhays

# Http endpoings
@http
get /
get /jobs
get /jobs/:jobId
post /api/contact
any /*

@aws
profile architect # local aws named profile used to deploy from local machine
runtime typescript # sets TS as the the default runtime for your entire project
region us-east-2 # AWS region

# Defines static files that will be uploaded to s3
# prune will automatically remove assets from S3 bucket 
# not found in the static folder set below
@static
folder public
prune true

# Adds support for typescript to arc. Builds files use ESbuild and output to ./.build
@plugins
architect/plugin-typescript
seed-database

# Typescript esbuild config location
@typescript

# Allows lambdas to share code. Automatically gets copied into all functions
# Usage: import { x } from '@architect/shared/<filename>'
@shared

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