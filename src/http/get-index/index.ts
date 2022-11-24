// // learn more about HTTP functions here: https://arc.codes/http
import indexFile from './index.html'
import { Template } from '@architect/views/template'
import { tables } from '@architect/functions'

export const handler = async (req) => {
    let client = await tables()
    let workhaysTable = client.workhays

    let allRecords = await workhaysTable.scan({})

    let jobsByEmployer = await workhaysTable.query({
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1PK = :employerId and begins_with(GSI1SK, :prefix)',
        ExpressionAttributeValues: {
            ':employerId': 'EMPLOYER#1231',
            ':prefix': 'JOB#',
        },
    })

    let usersByEmployer = await workhaysTable.query({
        IndexName: 'GSI1',
        KeyConditionExpression: 'GSI1PK = :employerId and begins_with(GSI1SK, :prefix)',
        ExpressionAttributeValues: {
            ':employerId': 'EMPLOYER#1231',
            ':prefix': 'USER#',
        },
    })

    const result = Template(indexFile, {
        pageTitle: 'Work Hays',
        allRecords,
        jobsByEmployer,
        usersByEmployer,
    })

    return {
        statusCode: 200,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
            'content-type': 'text/html; charset=utf8',
        },
        body: result,
    }
}
