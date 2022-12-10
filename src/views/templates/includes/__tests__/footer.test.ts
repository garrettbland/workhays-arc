/**
 * @jest-environment jsdom
 */

import footer from '../footer.html'
import { render } from 'squirrelly'
import { screen } from '@testing-library/dom'

describe('Footer', () => {
    it('Should display site title', () => {
        const mockData = {
            site: { title: 'Disco Party' },
        }

        document.body.innerHTML = render(footer, mockData)

        expect(screen.getByText(/Copyright Disco Party/i)).not.toBeNull()
    })
})
