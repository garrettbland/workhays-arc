/**
 * Shared template utility
 */

import * as Sqrl from 'squirrelly'

export const Template = (html: string) => {
    const myTemplate = html ?? 'This is a webpage and my name is {{ it.name }}'
    const data = {
        name: 'Garrett from data',
    }
    const result = Sqrl.render(myTemplate, data)

    console.log(result)

    return result
}
