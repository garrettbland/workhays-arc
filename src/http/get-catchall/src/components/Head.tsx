import { Helmet } from 'react-helmet'
import { Head as HeadInterface } from '../types'

/**
 * Head component to control elements such as page
 * title, meta descriptions, etc. Example usage...
 * ```tsx
 * import { Head } from './Head'
 *
 * const metaItems = {
 *     'og:title': 'Blue Car'
 * }
 *
 * return <Head title="Red Fish"/>
 * return <Head title="Blue Car" meta={metaItems} />
 * ```
 */
export const Head = ({ title, meta = {} }: HeadInterface) => {
    return (
        <Helmet>
            <title>{title}</title>
            {Object.entries(meta).map(([property, content], index) => (
                <meta property={property} content={content} key={index} />
            ))}
        </Helmet>
    )
}
