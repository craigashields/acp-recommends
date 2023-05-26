const siteMetadata: {
    title: string;
    author: string;
    headerTitle: string;
    description: string;
    language: string;
    theme: 'system' | 'dark' | 'light';
    siteUrl: string;
    siteRepo: string;
    siteLogo: string;
    socialBanner: string;
    email: string;
    github: string;
    facebook: string;
    applepodcast: string;
    podbean: string;
    spotify: string;
    locale: string;
    contentDir: string;
  } = {
    title: 'Awesome Comics Podcast Recommendations',
    author: 'Craig Shields',
    headerTitle: 'Recommendations',
    description: 'A list of awesome comics which have been recommended on the ACP.',
    language: 'en-gb',
    theme: 'system', // system, dark or light
    siteUrl: 'https://acp-recommends.vercel.app',
    siteRepo: 'https://github.com/craigashields/acp-recommends',
    siteLogo: '/static/images/logo.jpg',
    socialBanner: '/static/images/logo_banner.jpeg',
    email: 'craig.a.shields84@gmail.com',
    github: 'https://github.com/craigashields',
    facebook: 'https://www.facebook.com/awesomecomicspodcast/?locale=en_GB',
    applepodcast: 'https://podcasts.apple.com/gb/podcast/the-awesome-comics-podcast/id1019628337',
    podbean: 'https://awesomecomics.podbean.com/',
    spotify: 'https://open.spotify.com/show/6kemZFyM1aD7ih3MRri5Q1',
    locale: 'en-GB',
    contentDir: '/data/content'
  };
  
  export default siteMetadata;