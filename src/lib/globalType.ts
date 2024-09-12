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
}
