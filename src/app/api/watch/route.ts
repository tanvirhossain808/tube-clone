// pages/api/getVideos.ts
import data from "../../../utils/data.json"
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

        //  call it after applying debouncing
        // const response = await axios.get(searchUrl, {
        //     params: {
        //         part: 'snippet',
        //         q: 'React.js',
        //         key: apiKey,
        //         maxResults: 50,  // Include maxResults here
        //     },
        // });
        // const response =
        // console.log(response);
        // console.log(response);
        // const data = response.data
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
}
