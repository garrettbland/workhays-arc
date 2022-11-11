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