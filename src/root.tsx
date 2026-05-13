import "./global.css";
import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, useDocumentHead, useLocation } from "@builder.io/qwik-city";
import favicon from "./favicon.ico";

export const Root = component$(() => {
    return (
        <QwikCityProvider>
            <head>
                <Head />
            </head>

            <body>
                <RouterOutlet />
            </body>
        </QwikCityProvider>
    );
});

export const siteName = "SmoothNanners";

const Head = component$(() => {
    const docHead = useDocumentHead();
    const loc = useLocation();

    return (
        <>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="text-scale" content="scale" />
            <title>{docHead.title ? `${docHead.title} | ${siteName}` : siteName}</title>
            <link rel="canonical" href={loc.url.href} />
            <link rel="icon" type="image/x-icon" href={favicon} />

            {docHead.links.map((l) => (
                <link key={l.key} {...l} />
            ))}

            {docHead.scripts.map((s) => (
                <script
                    key={s.key}
                    {...s.props}
                    {...(s.props?.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: s.script })}
                />
            ))}

            {docHead.meta.map((m) => (
                <meta key={m.key} {...m} />
            ))}

            {docHead.styles.map((s) => (
                <style
                    key={s.key}
                    {...s.props}
                    {...(s.props?.dangerouslySetInnerHTML ? {} : { dangerouslySetInnerHTML: s.style })}
                />
            ))}
        </>
    );
});
