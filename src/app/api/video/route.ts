// pages/api/getVideos.ts

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
    console.log("object");
    try {
        const apiKey = process.env.YOU_TUBE_VIDEO_KEY_API;
        const searchUrl = process.env.YOU_TUBE_VIDEO_API
        console.log(apiKey);
        console.log(searchUrl)
        if (!apiKey) {
            return NextResponse.json({ error: "Api key is missing" }, { status: 500 });
        }
        if (!searchUrl) return NextResponse.json({ error: "Search url is missing" }, { status: 500 });


        const response = await axios.get(searchUrl, {
            params: {
                part: ['snippet,contentDetails,statistics'],
                type: 'video',
                q: 'React.js',
                maxResults: 50,
                key: apiKey,
            },
        });
        console.log(response);
        const data = response.data
        return NextResponse.json({ message: "success", data });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error fetching youtube videos", err: error }, { status: 500 });
    }
}
