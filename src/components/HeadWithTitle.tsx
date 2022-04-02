import Head from "next/head";

type Props = {
    title?: string;
    noIndex?: boolean;
    description?: string;
    children?: JSX.Element;
};

export default function HeadWithTitle({ title, noIndex, description, children }: Props) {
    return (
        <Head>
            <title>{(title && title.length > 0 ? `${title} – ` : "") + "SmoothNanners"}</title>

            {noIndex && <meta name="robots" content="noindex" />}

            {description && <meta name="description" content={description} />}

            <link rel="icon" href="/favicon.ico" />

            {children}
        </Head>
    );
}
