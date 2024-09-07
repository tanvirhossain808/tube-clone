// pages/api/getVideos.ts
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { youTubeLInk } from "../../../../constant/link"
import { channelData } from "../../../../constant/channelData"
import { commentData } from "../../../../constant/commentsData"

export async function POST(req: Request, res: Response) {
    const { id } = await req.json()
    console.log(id, "id")
    try {
        const apiKey = process.env.YOU_TUBE_VIDEO_KEY_API
        // const searchUrl = process.env.YOU_TUBE_VIDEO_API
        const searchUrl = process.env.YOU_TUBE_CHANNEL_LINK
        if (!apiKey) {
            return NextResponse.json(
                { error: "Api key is missing" },
                { status: 500 }
            )
        }
        if (!searchUrl)
            return NextResponse.json(
                { error: "Search url is missing" },
                { status: 500 }
            )

        const response = await axios.get(youTubeLInk + "commentThreads", {
            params: {
                part: "snippet,replies", // Retrieves comment data and replies
                key: apiKey, // Your YouTube API key
                videoId: id, // The ID of the video you're fetching comments for
            },
        })
        if (response.status !== 200) {
            throw new Error("quota limit exceeded")
        }
        return NextResponse.json({
            message: "success",
            data: response.data,
        })
        // return NextResponse.json({
        //     message: "success",
        //     data: commentData,
        // })

        // return NextResponse.json({
        //     message: "success",
        //     data: response,
        // })
        // console.log("hey")
        // return NextResponse.json({
        //     message: "success",
        //     data: channelData,
        // })
    } catch (error: unknown) {
        return NextResponse.json(
            { error: "Error fetching youtube videos", err: error },
            { status: 5005 }
        )
    }
}
