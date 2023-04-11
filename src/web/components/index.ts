import { h } from 'preact'
import register from 'preact-custom-element'
import htm from 'htm'

import { Header } from './Header'
import { Listings } from './Listings'

console.log('Ayooooo')

// Initialize htm with Preact
const html = htm.bind(h)
window.html = html

register(Header, 'x-header', ['name'], { shadow: false })
register(Listings, 'x-listings', ['jobs'], { shadow: false })
