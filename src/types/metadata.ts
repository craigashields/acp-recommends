export type LogPortflio = {
  logContent: LogContent;
  logInfo: LogInfo;
};

export type LogContent = {
  intro: string;
  podbean_log: string;
  spotify_log: string;
  apple_log: string;
};

export type LogInfo = {
  group: boolean;
  styles: string;
};

export type Messaging = {
  notFoundHeader: string;
  notFoundMessage: string;
  notFoundButtonText: string;
};

export type SiteMetadata = {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  theme: "system" | "dark" | "light";
  siteUrl: string;
  siteRepo: string;
  siteLogo: string;
  socialBanner: string;
  facebook: string;
  applepodcast: string;
  podbean: string;
  spotify: string;
  locale: string;
  logPortflio: LogPortflio;
  messaging: Messaging;
};
