import { NextRequest, NextResponse } from "next/server"
import { youTubeLInk } from "../../../../constant/link"
import axios from "axios"

export const POST = async (req: NextRequest, res: NextResponse) => {
    const { id } = await req.json()
    console.log(id, "lku")
    const key = process.env.YOU_TUBE_VIDEO_KEY_API
    if (!key) return
    try {
        if (!id) throw new Error("Video id is missing")
        // if (!key) return  throw new Error("Key is not found")
        const videoData = await axios.get(youTubeLInk + "videos", {
            params: {
                part: "snippet",
                key,
                id,
            },
        })
        console.log(videoData.data)
        if (videoData.data) {
            return NextResponse.json({
                success: true,
                data: videoData.data.items[0].snippet,
            })
        }
        NextResponse.json({ success: false, data: "any" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ err: error })
    }
}
