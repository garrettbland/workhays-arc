import { compile, render, templates, parse, defaultConfig } from 'squirrelly'
import { SquirrellyPartial, LayoutRenderer } from '../types'
import { DEFAULT_LAYOUT } from './config'

/**
 * Loops through the partials and defines them to use within out .html
 * templates. Example usage...
 *
 * ```ts
 * import { definePartials } from 'templates'
 * definePartials([{ title: 'foobar', partial: '<div>whatever html</div>'}])
 * ```
 *
 * Example template usage...
 *
 * ```html
 * <div>Example</div>
 * <div>{{ @include('foobar', it) /}}</div>
 * ```
 */
export const definePartials = (partials: SquirrellyPartial[]) => {
    partials.forEach(({ title, partial }) => {
        templates.define(title, compile(partial))
    })
}

/**
 * Renders content with an extended layout. Defaults to 'base' layout.
 * Usage example...
 *
 * ```ts
 * import { renderWithLayout } from 'templates'
 * renderWithLayout({ content: '<div>Hi Im {{ it.name }}</div>', data: {name: 'garrett'}})
 * ```
 */
export const renderWithLayout: LayoutRenderer = ({
    layout = DEFAULT_LAYOUT,
    content,
    data,
}): string => {
    // console.log(parse(`{{@extends('${layout}', it)}}${content}{{/extends}}`, defaultConfig))
    const rendered: string = render(`{{@extends('${layout}', it)}}${content}{{/extends}}`, data)

    /**
     * Use this regex to find web components, and somehow add these to end of <body> to load islands
     */
    const matchWebComponents = /<([a-zA-Z]+-[a-zA-Z\-]+).*>.*<\/.*>/gm
    const matches = rendered.matchAll(matchWebComponents)

    // console.log([...matches].map((item) => item[1]))

    const TEMPL = `<!-- web-component-placeholder  -->`

    const scriptsToAdd = [...matches]
        .map((item) => item[1])
        .reduce((previous, curr) => {
            return previous + `<script src="/_static/${curr}.js"></script>`
        }, '')

    return rendered.replace(TEMPL, scriptsToAdd)
}
