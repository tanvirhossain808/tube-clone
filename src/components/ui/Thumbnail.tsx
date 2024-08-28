import Image from "next/image"
import { FC } from "react"
type ThumbnailsType = {
    default: {
        url: string
        width: number
        height: number
    }
    medium: {
        url: string
        width: number
        height: number
    }
    high: {
        url: string
        width: number
        height: number
    }
    standard: {
        url: string
        width: number
        height: number
    }
    maxres: {
        url: string
        width: number
        height: number
    }
    totalTime: string
}

const Thumbnail: FC<ThumbnailsType> = ({
    medium,
    default: normal,
    high,
    standard,
    totalTime,
}) => {
    const { url, width, height } = standard
    // console.log(height, width);
    return (
        <div className="relative -z-10">
            <Image
                src={url}
                alt="thumbnail"
                width={width}
                height={height}
                loading="lazy"
                className="object-cove"
            />
            {
                <p className="absolute bottom-10 p-1 text-[12px] rounded-sm bg-[#000000c9] right-2">
                    {totalTime}
                </p>
            }
        </div>
    )
}

export default Thumbnail
