/**
 * Shared template utility
 */
import { PARTIALS } from './templates/config'
import { definePartials, renderWithLayout } from './templates'

definePartials(PARTIALS)

export const Template = (html: string, pageData?: Record<string, any>) => {
    const data = {
        name: 'Garrett from data',
        last: 'Work Hays Footer',
        site: {
            title: 'Work Hays',
        },
        pageTitle: 'To Do',
        ...pageData,
    }

    return renderWithLayout({ content: html, data })
}
