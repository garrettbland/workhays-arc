import homeHTML from './home.html'
import { Template } from '../../templates/template'
import { HttpRequest } from '@architect/functions/types/http'

export default (req: HttpRequest) => {
    return Template(homeHTML, {
        pageTitle: 'Work Hays',
        activeJobs: [],
        // allRecords,
        // jobsByEmployer,
        // usersByEmployer,
    })
}
