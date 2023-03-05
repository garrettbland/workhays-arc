export const handler = async () => {
    return {
        statusCode: 404,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: `
          <html>
            <head>
              <title>Work Hays API</title>
            </head>
            <body>
              <h1>404 not found</h1>
              <p>
                Error 404 - endpoint not found
              </p> 
            </body>
          </html>
        `,
    }
}
