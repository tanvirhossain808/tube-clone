/* eslint-disable react-hooks/exhaustive-deps */
import { TopLevelCommentObj } from "@/lib/globalType"
import { addComments } from "@/store/commentsSlice"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const useGetComments = (id: string) => {
    const dispatch = useDispatch()
    let [channelId, setChannelId] = useState("")
    const [commentsInfo, setCommentsInfo] = useState([
        {
            id: "",
            snippet: {
                topLevelComment: {
                    snippet: {
                        authorProfileImageUrl: "",
                        likeCount: 0,
                        publishedAt: "",
                        textDisplay: "",
                        videoId: "",
                        authorDisplayName: "",
                    },
                },
            },
        },
    ])
    const fetchCommentsData = async () => {
        try {
            const commentData = await axios.post("api/comments", {
                id,
            })
            setChannelId(commentData.data.data.items[0].snippet.channelId)
            setCommentsInfo(commentData.data.data.items)
            const comments = commentData.data.data.items.map(
                (comment: TopLevelCommentObj) => {
                    return {
                        ...comment.snippet.topLevelComment.snippet,
                        id: comment.id,
                        replies: [
                            {
                                kind: "youtube#commentThread",
                                etag: "QC-uEusSO4Rtnwh2_qrmfJHbJV8",

                                id: "Ugw4_tMKyhByNzLgxkV4AaABAg",
                                channelId: "UCq_7HCsiy115mre6OBH_dAQ",
                                videoId: "7KIH4BlQito",
                                textDisplay:
                                    "😂😂😂😂❤❤❤😢😢😅😅😊😊😮😮😮 bahut badhiya movie hai bhai",
                                textOriginal:
                                    "😂😂😂😂❤❤❤😢😢😅😅😊😊😮😮😮 bahut badhiya movie hai bhai",
                                authorDisplayName: "@user-rn5qy3bq5r",
                                authorProfileImageUrl:
                                    "https://yt3.ggpht.com/xuanqoVstaUzy3R_56vveEZaN3LM_2B8tQMHItZe1owxKT1CzYiHylLK9-yL85k-rqT3OXBR1w=s48-c-k-c0x00ffffff-no-rj",
                                authorChannelUrl:
                                    "http://www.youtube.com/@user-rn5qy3bq5r",
                                authorChannelId: {
                                    value: "UCXz7eoCG943daOFlkCGkaHQ",
                                },
                                canRate: true,
                                viewerRating: "none",
                                likeCount: 0,
                                publishedAt: "2024-09-11T18:20:47Z",
                                updatedAt: "2024-09-11T18:20:47Z",
                                replies: [
                                    {
                                        kind: "youtube#commentThread",
                                        etag: "QC-uEusSO4Rtnwh2_qrmfJHbJV8",

                                        id: "Ugw4_tMKyhByNzLgxkV4AaABAg",
                                        channelId: "UCq_7HCsiy115mre6OBH_dAQ",
                                        videoId: "7KIH4BlQito",
                                        textDisplay:
                                            "😂😂😂😂❤❤❤😢😢😅😅😊😊😮😮😮 bahut badhiya movie hai bhai",
                                        textOriginal:
                                            "😂😂😂😂❤❤❤😢😢😅😅😊😊😮😮😮 bahut badhiya movie hai bhai",
                                        authorDisplayName: "@user-rn5qy3bq5r",
                                        authorProfileImageUrl:
                                            "https://yt3.ggpht.com/xuanqoVstaUzy3R_56vveEZaN3LM_2B8tQMHItZe1owxKT1CzYiHylLK9-yL85k-rqT3OXBR1w=s48-c-k-c0x00ffffff-no-rj",
                                        authorChannelUrl:
                                            "http://www.youtube.com/@user-rn5qy3bq5r",
                                        authorChannelId: {
                                            value: "UCXz7eoCG943daOFlkCGkaHQ",
                                        },
                                        canRate: true,
                                        viewerRating: "none",
                                        likeCount: 0,
                                        publishedAt: "2024-09-11T18:20:47Z",
                                        updatedAt: "2024-09-11T18:20:47Z",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    }
                }
            )
            dispatch(addComments(comments))
            console.log("cD", commentData.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCommentsData()
    }, [id])
    return { commentsInfo, channelId }
}

export default useGetComments
