// pages/api/getVideos.ts
/* import data from "../../../utils/data.json"
import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: Request, res: Response) {
    try {
        const apiKey = process.env.YOU_TUBE_VIDEO_KEY_API
        // const searchUrl = process.env.YOU_TUBE_VIDEO_API
        const searchUrl = "https://youtube.googleapis.com/youtube/v3/search"
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


        return NextResponse.json({
            message: "success",
            data,
            response: "response:",
        })
    } catch (error: any) {
        return NextResponse.json(
            { error: "Error fetching youtube videos", err: error },
            { status: 500 }
        )
    }
} */

import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { youTubeLInk } from "../../../../constant/link"
import { VideoSearchType, VideoSearchTypeItemsType } from "@/lib/globalType"

export const POST = async (req: NextRequest) => {
    const { q } = await req.json()
    console.log(q, "q")
    if (!q) return NextResponse.json("video query not found", { status: 404 })
    // const [error,response]?=await fetch(youTubeLInk+"search")
    const key = process.env.YOU_TUBE_VIDEO_KEY_API

    try {
        const data = await axios.get(youTubeLInk + "search", {
            params: {
                part: "snippet",
                q,
                key,
                maxResults: 50,
                type: "video",
            },
        })

        if (
            data?.data?.items.length === undefined ||
            data.data.items.length === 0
        ) {
            throw new Error("error")
        }

        const videos = data.data.items.map((videosData: VideoSearchType) => {
            return { ...videosData.snippet, id: videosData.id }
        })

        return NextResponse.json(
            { data: videos, success: true },
            { status: 200 }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json({ err: error })
    }
}
