import * as SquirrellyAPI from 'squirrelly'
import { definePartials, renderWithLayout } from '../index'
import { PARTIALS } from '../config'

describe('definePartials', () => {
    it('Should compile and define partials from array of partials', () => {
        const defineSpy = jest.spyOn(SquirrellyAPI.templates, 'define')

        const fakePartials = [
            {
                title: 'navbar',
                partial: '<nav>Very kewl navbar</nav>',
            },
            {
                title: 'footer',
                partial: '<footer>Somber footer</footer>',
            },
        ]

        definePartials(fakePartials)

        expect(defineSpy).toHaveBeenCalledTimes(2)
    })
})

describe('renderWithLayout', () => {
    it('Should render content with template', () => {
        const fakeLayout = "<div>{{@block('content')}} fake example {{/block}}</div>"

        const fakePartials = [
            {
                title: 'fakeLayoutTitle',
                partial: fakeLayout,
            },
        ]

        definePartials(fakePartials)

        const fakeContent = '<p>{{ it.fakeName }} is cool</p>'
        const fakeData = {
            fakeName: 'Garrett',
        }
        const renderedHtml = renderWithLayout({
            layout: 'fakeLayoutTitle',
            content: fakeContent,
            data: fakeData,
        })

        expect(renderedHtml).toBe('<div><p>Garrett is cool</p></div>')
    })
    it('Should render content with default template', () => {
        const fakeContent = '<p>{{ it.fakeName }} is cool</p>'

        definePartials(PARTIALS)

        const renderedHtml = renderWithLayout({
            content: fakeContent,
            data: {
                name: 'Garrett from data',
                last: 'Work Hays Footer',
                site: {
                    title: 'Work Hays',
                },
                pageTitle: 'Starbucks Coffee',
            },
        })

        expect(renderedHtml.includes('<title>Starbucks Coffee</title>')).toBe(true)
    })
})
