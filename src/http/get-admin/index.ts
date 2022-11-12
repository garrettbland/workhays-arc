// learn more about HTTP functions here: https://arc.codes/http
export async function handler(req) {
    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Admin</title>
          <link href="./_static/style.css" rel="stylesheet">
        </head>
        <body class="padding-32">
          <div id="root"></div>
          <script type="module" src="/_static/index.js"></script>
        </body>
      </html>
    `,
    }
}
