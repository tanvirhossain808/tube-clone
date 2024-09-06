// pages/api/getVideos.ts
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { youTubeLInk } from "../../../../constant/link"
import { channelData } from "../../../../constant/channelData"

export async function POST(req: Request, res: Response) {
    const { channelId } = await req.json()
    console.log(channelId, "id")
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

        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/channels",
            {
                params: {
                    part: "snippet", // You can add 'statistics' if you need subscriber count, etc.
                    key: apiKey, // Your YouTube API key
                    id: channelId, // The ID of the channel you're fetching
                },
            }
        )
        console.log(response.data, "fdksl")
        if (response.status !== 200) {
            throw new Error("quota limit exceeded")
        }
        return NextResponse.json({
            message: "success",
            data: response.data,
        })
        // return NextResponse.json({
        //     message: "success",
        //     data: channelData,
        // })
    } catch (error: unknown) {
        return NextResponse.json(
            { error: "Error fetching youtube videos", err: error },
            { status: 500 }
        )
    }
}
