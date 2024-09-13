import { Dispatch, SetStateAction } from "react"

interface YouTubeVideoItem {
    /*  id: {
         videoId: string;
     }; */
    kind: string
    etag: string
    id: string
    tags?: string[]
    snippet: {
        channelId: string
        publishedAt: string
        title: string
        description: string
        thumbnails: {
            default: {
                url: string
                width: number
                height: number
            }
            medium: {
                url: string
                width: number
                height: number
            }
            high: {
                url: string
                width: number
                height: number
            }
            standard: {
                url: string
                width: number
                height: number
            }
            maxres: {
                url: string
                width: number
                height: number
            }
        }
        channelTitle: string
        tags: string[]
        categoryId: string
        localized: {
            title: string
            description: string
        }
        defaultAudioLanguage: string
    }
    contentDetails: {
        duration: string
    }
    statistics?: {
        viewCount: number
        likeCount: number
        favoriteCount: number
        commentCount: number
    }
}

interface YouTubeSearchResponse {
    etag: string
    kind: string
    nextPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: YouTubeVideoItem[]
}
interface CartType {
    cart?: {
        items: YouTubeSearchResponse[]
        currentTime: {
            [key: string]: number
        }
    }
    nextPageToken?: string
    searchCache?: {
        [key: string]: string
    }
    comments?: Comment[]
}
interface CartType {}

interface TitleType {
    [key: number]: {
        id: number
        title: string
    }
}
interface QueryList {
    [key: number]: {
        pageid: number
        title: string
    }
}
interface SearchCacheProps {
    id: number
    title: string
}

interface KeywordSuggestionProps {
    title: string
    setSearchInput: Dispatch<SetStateAction<string>>
    searchInput: string
    id: number
}

interface TopLevelCommentObj {
    id: string
    snippet: {
        topLevelComment: {
            snippet: {
                authorProfileImageUrl: string
                likeCount: number
                publishedAt: string
                textDisplay: string
                videoId: string
                authorDisplayName: string
            }
        }
    }
}

type TopLevelComment = TopLevelCommentObj[]
interface Comment {
    id: string
    videoId: string
    author: string
    textDisplay: string
    publishedAt: string
    authorDisplayName: string
    authorProfileImageUrl: string
    authorChannelUrl?: string
    likeCount: number
    replies?: Comment[] // Recursive type for nested comments
}
interface VideoSearchType {
    nextPageToken: string
    regionCode: string
    snippet: VideoSearchTypeItemsType[]
    id: string
}
// {
// "publishedAt": "2024-09-03T08:14:00Z",
// "channelId": "UCHIQkF6dO4aQJP2A0rfHvuQ",
// "title": "any yash 💞office kiss story pt 2😂❤️#love #chinesedrama #lovestory #shortvideo #funny #short #ckdrama",
// "description": "any yash office kiss story pt 2  ❤️#love #chinesedrama #lovestory #shortvideo #funny #short #ckdrama @HappyLstory ...",
// "thumbnails": {
//     "default": {
//         "url": "https://i.ytimg.com/vi/WfWYMo_akNU/default.jpg",
//         "width": 120,
//         "height": 90
//     },
//     "medium": {
//         "url": "https://i.ytimg.com/vi/WfWYMo_akNU/mqdefault.jpg",
//         "width": 320,
//         "height": 180
//     },
//     "high": {
//         "url": "https://i.ytimg.com/vi/WfWYMo_akNU/hqdefault.jpg",
//         "width": 480,
//         "height": 360
//     }
// },
// "channelTitle": "Anne L Story",
// "liveBroadcastContent": "none",
// "publishTime": "2024-09-03T08:14:00Z"
// }
interface VideoSearchTypeItemsType {
    publishedAt: string
    title: string
    description: string
    thumbnails: {
        high: {
            url: string
            width: number
            height: number
        }
        medium: {
            url: string
            width: number
            height: number
        }
        default: {
            url: string
            width: number
            height: number
        }
    }
    channelTitle: string
    publishTime: string
    id: string
}

export type {
    YouTubeSearchResponse,
    YouTubeVideoItem,
    CartType,
    TitleType,
    QueryList,
    KeywordSuggestionProps,
    SearchCacheProps,
    TopLevelComment,
    TopLevelCommentObj,
    Comment,
    VideoSearchType,
    VideoSearchTypeItemsType,
}
