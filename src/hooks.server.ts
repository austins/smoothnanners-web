import { minify } from "html-minifier";
import type { Options } from "html-minifier";
import { building } from "$app/environment";
import type { Handle } from "@sveltejs/kit";

const minificationOptions: Options = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    decodeEntities: true,
    html5: true,
    ignoreCustomComments: [/^#/],
    minifyCSS: true,
    minifyJS: false,
    removeAttributeQuotes: true,
    removeComments: false, // Some hydration code needs comments.
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true
};

/** @type {import('@sveltejs/kit').Handle} */
export const handle: Handle = ({ event, resolve }) => {
    let page = "";

    return resolve(event, {
        transformPageChunk: ({ html, done }) => {
            page += html;

            if (done) {
                return building ? minify(page, minificationOptions) : page;
            }
        }
    });
};
