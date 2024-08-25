interface YouTubeVideoItem {
    /*  id: {
         videoId: string;
     }; */
    kind: string;
    etag: string;
    id: string;
    tags?: string[];
    snippet: {
        channelId: string,
        publishedAt: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number
            };
            medium: {
                url: string;
                width: number;
                height: number
            };
            high: {
                url: string;
                width: number;
                height: number
            };
            standard: {
                url: string;
                width: number;
                height: number
            };
            maxres: {
                url: string;
                width: number;
                height: number
            };

        };
        channelTitle: string;
        tags: string[];
        categoryId: string;
        localized: {
            title: string;
            description: string
        };
        defaultAudioLanguage: string;
    };
    contentDetails: {
        duration: string;

    };
    statistics?: {
        viewCount: String;
        likeCount: String;
        favoriteCount: String;
        commentCount: String;
    }
};

interface YouTubeSearchResponse {
    etag: string;
    kind: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: YouTubeVideoItem[];
}

export type { YouTubeSearchResponse, YouTubeVideoItem }