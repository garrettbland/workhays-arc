/**
 * Shared template utility
 */
import { head, navbar, header, footer, layout } from './includes'
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
    {
        title: 'layout',
        partial: layout,
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

export const Template = (html: string, pageData?: Record<string, any>) => {
    const myTemplate = html
    const data = {
        name: 'Garrett from data',
        last: 'Work Hays Footer',
        site: {
            title: 'Work Hays',
        },
        pageTitle: 'To Do',
        ...pageData,
    }

    const result = render(`{{@extends('layout', it)}}${myTemplate}{{/extends}}`, data)

    return result
}
