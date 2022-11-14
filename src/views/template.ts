/**
 * Shared template utility
 */
import head from './includes/head.html'
import navbar from './includes/navbar.html'
import header from './includes/header.html'
import footer from './includes/footer.html'
import { compile, render, templates } from 'squirrelly'

const PARTIALS: { title: string; partial: string }[] = [
    {
        title: 'head',
        partial: head,
    },
    {
        title: 'navbar',
        partial: navbar,
    },
    {
        title: 'header',
        partial: header,
    },
    {
        title: 'footer',
        partial: footer,
    },
]

/**
 * Loops through the partials and defines them to use within out .html
 * templates. Example usage...
 *
 * ```html
 * <div>Example</div>
 * <div>{{ @include('navbar', it) /}}</div>
 * ```
 */
PARTIALS.forEach(({ title, partial }) => {
    templates.define(title, compile(partial))
})

export const Template = (html: string) => {
    const myTemplate = html
    const data = {
        name: 'Garrett from data',
        last: 'Work Hays Footer',
        site: {
            title: 'Work Hays',
        },
        pageTitle: 'To Do',
    }

    /**
     * To do: figured out @extends from squirelly
     */
    const result = render(`${header}${myTemplate}${footer}`, data)

    console.log(result)

    return result
}
