export const handler = async () => {
    return {
        statusCode: 200,
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
              <h1>Work Hays API</h1>
              <p>
                Welcome to the Work Hays API documentation page. This page serves
                as a living document of the public REST API endpoints.
              </p>
              <hr/>
                <h2>Jobs</h2>
                <h3>GET /v1/jobs</h3>
                <p>
                  Returns all jobs
                </p>
                <h4>Available Query Parameters</h4>
                <p>
                  <ul>
                    <li><strong>limit</strong> - Set limit on returned results. Defaults to 15</li>
                  </ul>
                </p>
                <h4>Example Usage</h4>
                <pre>
                  <code>
                    fetch('api.workhays.com/v1/jobs').then(res => {
                      return res.json()
                    }).then(data => {
                      console.log(data)
                    })
                  </code>
                </pre>
                <h3>GET /v1/jobs/:id</h3>
                <p>
                  Returns individual jobs
                </p>
                <ul>
                  <li>GET /v1/jobs</li>
                  <li>GET /v1/jobs/:id</li>
                  <li>PUT /v1/jobs/:id</li>
                  <li>POST /v1/jobs</li>
                  <li>DELETE /v1/jobs/:id</li>
                </ul>
                <h2>Employers</h2>
                <ul>
                  <li>Coming soon</li>
                </ul>
            </body>
          </html>
        `,
    }
}
