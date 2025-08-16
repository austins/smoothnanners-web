import type { Handle } from "@sveltejs/kit";
import { building } from "$app/environment";
import { minify } from "@swc/html";
import type { Options as MinificationOptions } from "@swc/html";

const minificationOptions: MinificationOptions = {
    removeComments: false // Some hydration code needs comments
};

export const handle: Handle = ({ event, resolve }) => {
    let page = "";

    return resolve(event, {
        async transformPageChunk({ html, done }) {
            page += html;

            if (done) {
                return building ? (await minify(page, minificationOptions)).code : page;
            }
        }
    });
};
