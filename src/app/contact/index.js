/**
 * Entry point for svelte application for contact page
 * Not using typescript for this application, mostly
 * because it was throwing a giant fit about parcel/ts/svelte
 * so I just gave up and went without TS.
 */

import App from './App.svelte'
new App({
    target: document.getElementById('root'),
})
