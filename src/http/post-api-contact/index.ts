import { http, tables } from '@architect/functions'
import { HttpRequest } from '@architect/functions/types/http'

const main = async (req: HttpRequest) => {
    try {
        let client = await tables()
        let workhaysTable = client.workhays

        console.log(req.body.name)

        const record = await workhaysTable.put({
            PK: `${Date.now().toString()}-${req.body.name}`,
            SK: 'CONTACT',
        })

        console.log(await workhaysTable.scan({}))

        const result = {
            success: true,
            message: 'Form submission was saved successfully.',
            record,
        }

        return {
            statusCode: 200,
            cacheControl: 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            type: 'application/json',
            body: JSON.stringify(result),
        }
    } catch (err) {
        /**
         * Log this error
         */
        return {
            statusCode: 500,
            type: 'application/json',
            body: JSON.stringify({ error: true, message: 'Something went wrong' }),
        }
    }
}

export const handler = http.async(main)
