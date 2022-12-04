import indexFile from './index.html'
import { Template } from '@architect/views/template'
import { tables } from '@architect/functions'

export const handler = async (req) => {
    try {
        let client = await tables()
        let workhaysTable = client.workhays

        const activeJob = await workhaysTable.get({
            PK: req.pathParameters.jobId,
            SK: 'JOB',
        })

        if (activeJob?.GSI1PK !== 'JOB#ACTIVE') {
            throw Error('Job not found')
        }

        const result = Template(indexFile, {
            pageTitle: 'Job Example',
            job: activeJob,
        })
        return {
            statusCode: 200,
            headers: {
                'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
                'content-type': 'text/html; charset=utf8',
            },
            body: result,
        }
    } catch (err) {
        /**
         * Log error
         */
        return {
            statusCode: 404,
            headers: {
                'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
                'content-type': 'text/html; charset=utf8',
            },
            body: '404 not found',
        }
    }
}
