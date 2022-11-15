/**
 * All of our shared html templates files
 */
import head from './includes/head.html'
import navbar from './includes/navbar.html'
import header from './includes/header.html'
import footer from './includes/footer.html'
import base from './includes/base.html'

import { SquirrellyPartial } from '@custom-types/template'

/**
 * All partials used throughout our includes templates
 * https://squirrelly.js.org/docs/api/templates-partials-layouts
 */
export const PARTIALS: SquirrellyPartial[] = [
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
    {
        title: 'base',
        partial: base,
    },
]

/**
 * Default layout template. Must match a registered
 * partial import
 */
export const DEFAULT_LAYOUT = 'base'
