import axios from "axios"
import React, { useEffect, useState } from "react"

const useGetComments = (id: string) => {
    let [channelId, setChannelId] = useState("")
    const [commentsInfo, setCommentsInfo] = useState([])
    const fetchCommentsData = async () => {
        try {
            const commentData = await axios.post("api/comments", {
                id,
            })
            setChannelId(commentData.data.data[0]?.snippet.channelId)
            setCommentsInfo(commentData.data.data)
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
