import React, { Component } from 'react';
import { Head } from 'react-static';

type SEOProps = {
    description?: string,
    image?: any,
    url?: any,
    article?: any,
    title?: string,
    twitterUsername?: string,
}

class SEO extends Component<SEOProps, any> {
    constructor(props: SEOProps) {
        super(props)
    }
    render() {
        const {
            description,
            image,
            url,
            article,
            title,
            twitterUsername,
        } = this.props
        return (
            <>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/favicon-32x32.png"
                        sizes="32x32"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/favicon-16x16.png"
                        sizes="16x16"
                    />

                    <link
                        rel="mask-icon"
                        href="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/safari-pinned-tab.svg"
                        color="#FFA000"
                    />
                    <meta name="description" content={description || ""} />
                    <meta name="image" content={image} />
                    {url && <meta property="og:url" content={url || ""} />}
                    {(article ? true : null) && (
                        <meta property="og:type" content="article" />
                    )}
                    {title && <meta property="og:title" content={title || ""} />}
                    {description && (
                        <meta property="og:description" content={description || ""} />
                    )}
                    {image && <meta property="og:image" content={image} />}
                    <meta name="twitter:card" content="summary_large_image" />
                    {twitterUsername && (
                        <meta name="twitter:creator" content={twitterUsername || ""} />
                    )}
                    {title && <meta name="twitter:title" content={title || ""} />}
                    {description && (
                        <meta name="twitter:description" content={description || ""} />
                    )}
                    {image && <meta name="twitter:image" content={image} />}
                    <meta property="fb:app_id" content="2302291186701393" />
                    <title>{title}</title>                    
                </Head>
            </>
        );
    }
}

export default SEO;