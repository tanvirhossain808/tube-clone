// pages/api/getVideos.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log("object");
    try {
        const apiKey = process.env.YOU_TUBE_VIDEO_KEY_API;
        const searchUrl = process.env.YOU_TUBE_VIDEO_API
        console.log(apiKey);
        console.log(searchUrl)
        if (!apiKey) {
            return res.status(500).json({ error: 'API key is missing.' });
        }
        if (!searchUrl) return res.status(500).json({ error: "Search url is missing" })

        const response = await axios.get(searchUrl, {
            params: {
                part: 'snippet',
                type: 'video',
                q: 'React.js',
                maxResults: 50,
                key: apiKey,
            },
        });
        const data = response.data
        console.log(data);
        return Response.json({ data, message: "success" });
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return res.status(500).json({ error: 'Error fetching YouTube videos.' });
    }
}
