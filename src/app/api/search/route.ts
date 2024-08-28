import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { searchText } = body

    try {
        const params = {
            action: "query",
            format: "json",
            generator: "prefixsearch",
            prop: "pageprops|pageimages|description",
            redirects: "",
            ppprop: "displaytitle",
            piprop: "thumbnail",
            pithumbsize: 10,
            pilimit: 5,
            gpssearch: searchText,
            gpsnamespace: 0,
            gpslimit: 5,
            origin: "*",
        }
        const url = process.env.AUTO_SEARCH_COMPLETE
        if (!url)
            return NextResponse.json({
                message: "Internal server error",
                status: 404,
            })
        const data = await axios.get(url, { params })
        if (data.status !== 200)
            return NextResponse.json({ message: "fail", status: 404 })
        return NextResponse.json({ message: "success", data: data?.data })
    } catch (error) {
        console.log(error)
    }
}
