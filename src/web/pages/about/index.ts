import aboutHTML from './about.html'
import { Template } from '../../templates/template'
import { HttpRequest } from '@architect/functions/types/http'

export default (req: HttpRequest) => {
    return Template(aboutHTML, {
        pageTitle: 'About | Work Hays',
        activeJobs: [],
        // allRecords,
        // jobsByEmployer,
        // usersByEmployer,
    })
}
