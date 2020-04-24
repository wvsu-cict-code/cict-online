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
                    <title>{title}</title>
                </Head>
            </>
        );
    }
}

export default SEO;