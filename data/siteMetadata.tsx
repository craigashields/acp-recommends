import { SiteMetadata } from "../interfaces";

const siteMetadata: SiteMetadata 
   = {
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
    contentDir: '/data/content',
    logPortflio: {
        logContent: {
          intro: "🤖 Hi, I'm Craig, thanks for visiting the ACP Recommendations! Check out the pod at any of the below",
          podbean_log: "🎙️ Podbean - https://awesomecomics.podbean.com/",
          spotify_log: "📻 Spotify - https://open.spotify.com/show/6kemZFyM1aD7ih3MRri5Q1",
          apple_log: "🍏 Apple Podcasts - https://tinyurl.com/4a3btc4f"
        },
        logInfo: {
          group: true,
          styles: "font-size: 1.25em; font-weight: bold; padding: 5px;"
        }
      },
    seasonalText: {
      halloween: {
        notFoundHeader: "Sorry, you've taken a wrong turn and ended up in Hell!",
        notFoundMessage: "Our ghostly ghouls couldn't find the page you were looking for. Don't be scared; you can always use the navigation cauldron to find your way back to the land of the living.",
        notFoundButtonText: "Escape the Abyss"
    },
    normal: {
      notFoundHeader: "Sorry I have no idea what that is.",
      notFoundMessage: "Why not go back to our homepage for awesome comic recommends.",
      notFoundButtonText: "Back to Awesomeness"
    },
    winter: {
      notFoundHeader: "Ho ho holy nutcrackers",
      notFoundMessage: "Our mischievous elves couldn't locate the page you were searching for. No worries, just follow the candy cane trail back to the homepage and stay off Santa's naughty list!",
      notFoundButtonText: "Sleigh Ride Back Home"
    }
}

  };
  
  export default siteMetadata;