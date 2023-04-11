/**
 * @jest-environment jsdom
 */

import header from '../header.html'
import { compile, render, templates } from 'squirrelly'

templates.define('navbar', compile('<navbar>Navigation Partial</navbar>'))

describe('Header', () => {
    it('Should display <header> tags', () => {
        const rendered = render(header, {})
        expect(rendered).toContain('<header')
        expect(rendered).toContain('</header>')
    })
})
