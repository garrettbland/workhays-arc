import register from 'preact-custom-element'
// import htm from 'htm'
// Initialize htm with Preact
// const html = htm.bind(h)

/**
 * A job object
 * @typedef {{title: string, description: string}} Job
 */

/**
 * Component to show job listings with pagination built in
 * @param {{ jobs: Job[]}} jobs - jobs array
 * @returns
 */
export const Listings = ({ jobs = `[]` }) => {
    if (typeof jobs !== 'string') {
        console.error('Jobs stirng was not passed in properly to listings')
    }

    const parsedJobs = JSON.parse(jobs)

    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {parsedJobs.map((item) => (
                    <li>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

register(Listings, 'x-listings', ['name'], { shadow: false })
