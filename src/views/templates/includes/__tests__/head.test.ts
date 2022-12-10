/**
 * @jest-environment jsdom
 */

import head from '../head.html'
import { render } from 'squirrelly'
import { screen } from '@testing-library/dom'

describe('Footer', () => {
    it('Should display site title', () => {
        const mockData = {
            pageTitle: 'Gummy Bears',
        }

        document.body.innerHTML = render(head, mockData)

        expect(screen.getByText('Gummy Bears')).not.toBeNull()
    })
})
