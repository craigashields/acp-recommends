import { SiteMetadata } from "@/types/metadata";

const siteMetadata: SiteMetadata = {
  title: "Awesome Comics Podcast Recommendations",
  author: "Craig Shields",
  headerTitle: "Recommendations",
  description:
    "A list of awesome comics which have been recommended on the ACP.",
  language: "en-gb",
  theme: "system",
  siteUrl: "https://acp-recommends.vercel.app",
  siteRepo: "https://github.com/craigashields/acp-recommends",
  siteLogo: "/static/images/logo.jpg",
  socialBanner: "/static/images/logo_banner.jpeg",
  facebook: "https://www.facebook.com/awesomecomicspodcast/?locale=en_GB",
  applepodcast:
    "https://podcasts.apple.com/gb/podcast/the-awesome-comics-podcast/id1019628337",
  podbean: "https://awesomecomics.podbean.com/",
  spotify: "https://open.spotify.com/show/6kemZFyM1aD7ih3MRri5Q1",
  locale: "en-GB",
  messaging: {
    notFoundHeader: "Sorry I have no idea what that is.",
    notFoundMessage:
      "Why not go back to our homepage for awesome comic recommendations.",
    notFoundButtonText: "Back to Awesomeness",
  },
  logPortflio: {
    logContent: {
      intro:
        "🤖 Hi, I'm Craig, thanks for visiting the ACP Recommendations! Check out the pod at any of the below",
      podbean_log: "🎙️ Podbean - https://awesomecomics.podbean.com/",
      spotify_log:
        "📻 Spotify - https://open.spotify.com/show/6kemZFyM1aD7ih3MRri5Q1",
      apple_log: "🍏 Apple Podcasts - https://tinyurl.com/4a3btc4f",
    },
    logInfo: {
      group: true,
      styles: "font-size: 1.25em; font-weight: bold; padding: 5px;",
    },
  },
};

export default siteMetadata;
