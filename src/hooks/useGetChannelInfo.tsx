import axios from "axios"
import { useEffect, useState } from "react"

const useGetChannelInfo = (channelId: string) => {
    const [channelData, setChannelData] = useState([])

    const fetchData = async () => {
        try {
            if (!channelId) return
            const data = await axios.post("api/channel", {
                channelId,
            })
            setChannelData(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [channelId])

    return { channelData }
}

export default useGetChannelInfo
