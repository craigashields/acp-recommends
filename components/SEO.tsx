import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '@/data/siteMetadata';

type CommonSEOProps = {
    title: string;
    description: string;
    ogType: string;
    ogImage: string | { url: string }[];
    canonicalUrl?: string;
};

const CommonSEO: React.FC<CommonSEOProps> = ({
    title,
    description,
    ogType,
    ogImage,
    canonicalUrl,
}) => {
    const router = useRouter();

    const renderOGImage = () => {
        if (Array.isArray(ogImage)) {
        return ogImage.map(({ url }) => (
        <meta property="og:image" content={url} key={url} />
        ));
        } else {
        return <meta property="og:image" content={ogImage} key={ogImage} />;
        }
    };
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={description} />
            <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            {renderOGImage()}
            <link
            rel="canonical"
            href={canonicalUrl ? canonicalUrl : `${siteMetadata.siteUrl}${router.asPath}`}
            />
        </Head>
    );
};

type PageSEOProps = {
title: string;
description: string;
};

export const PageSEO: React.FC<PageSEOProps> = ({ title, description }) => {
const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;

return (
<CommonSEO
   title={title}
   description={description}
   ogType="website"
   ogImage={ogImageUrl}
 />
);
};