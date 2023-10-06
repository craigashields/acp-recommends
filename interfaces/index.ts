// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For

export type PostType = {
    name: string;
    avatar: string;
    occupation: string;
    email: string;
    github: string;
    content: string;
};

export type LogPortflio = {
    logContent: LogContent;
    logInfo: LogInfo
}

export type LogContent = {
    intro: string;
    podbean_log: string;
    spotify_log: string;
    apple_log: string;
}

export type LogInfo = {
    group: boolean;
    styles: string;          
}

export type Season = {    
    notFoundHeader: string,
    notFoundMessage: string,
    notFoundButtonText: string
}

export type SeasonalInfo = { [key:string]: Season;}
        

export type SiteMetadata = {
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
    logPortflio: LogPortflio;
    seasonalText: SeasonalInfo
}