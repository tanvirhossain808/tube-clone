import Image from "next/image";
import { FC } from "react";
type ThumbnailsType = {
    default: {
        url: string;
        width: number;
        height: number
    };
    medium: {
        url: string;
        width: number;
        height: number
    };
    high: {
        url: string;
        width: number;
        height: number
    };
    standard: {
        url: string;
        width: number;
        height: number
    };
    maxres: {
        url: string;
        width: number;
        height: number
    };

}

const Thumbnail: FC<ThumbnailsType> = ({ medium, default: normal, high, standard }) => {
    const { url, width, height } = standard
    console.log(height, width);
    return (
        <div>
            <Image src={url} alt="thumbnail" width={width} height={height} loading="lazy" className="object-cove"
            />
        </div>
    );
};

export default Thumbnail;