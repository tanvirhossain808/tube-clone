import { Comment, TopLevelCommentObj } from "@/lib/globalType"
import formatUploadedDay from "@/utils/formateUploadedDay"
import Image from "next/image"
import { useRef, useState } from "react"
import { BiSolidDislike, BiSolidLike } from "react-icons/bi"
import { SlDislike, SlLike } from "react-icons/sl"
import CommentForm from "./Comments/CommentForm"

const CommentsContainer = ({
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textDisplay,
    authorDisplayName,
    replies,
}: Comment) => {
    console.log("replies", replies)
    const [isLike, setIsLike] = useState(false)
    const [isDisLike, setIsDisLike] = useState(false)
    const [totalLike, setTotalLike] = useState(likeCount)
    const [totalDisLike, setTotalDisLike] = useState(0)

    const [isVisible, setIsVisible] = useState(false)
    const [showFocus, setShowFocus] = useState(0)
    const handleLike = () => {
        if (isLike) {
            setTotalLike(totalLike - 1)
            setIsLike(false)
        } else {
            setTotalLike(totalLike + 1)
            setIsLike(true)
        }
    }
    const handleDisLike = () => {
        if (isDisLike) {
            setIsDisLike(false)
            setTotalDisLike(totalDisLike - 1)
        } else {
            setIsDisLike(true)
            setTotalDisLike(totalDisLike + 1)
        }
    }
    const handleReply = () => {
        setIsVisible(true)
        setShowFocus(showFocus + 1)
    }
    // console.log(totalDisLike)
    // console.log(totalLike)
    return (
        <>
            <div className="flex items-center gap-6 mt-6 border border-l-lime-300">
                <div className="cursor-pointer flex-shrink-0 ml-1">
                    <Image
                        src={authorProfileImageUrl}
                        alt="profile image"
                        width={30}
                        height={30}
                        className="rounded-full w-[30px] h-[30px] "
                    />
                </div>

                <div>
                    <div className="flex gap-3 items-center">
                        <p className="cursor-pointer text-[14px]">
                            {authorDisplayName}
                        </p>
                        <p className="text-gray-500 text-[14px]">
                            {formatUploadedDay(publishedAt)}
                        </p>
                    </div>

                    <p>{textDisplay}</p>
                    {replies?.map((reply) => (
                        <CommentsContainer key={reply.id} {...reply} />
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
                <div className="relative cursor-pointer">
                    {!isLike ? (
                        <SlLike onClick={handleLike} size={20} />
                    ) : (
                        <BiSolidLike onClick={handleLike} size={20} />
                    )}
                    <p className="absolute top-[-15px] left-full text-gray-500 text-[14px]">
                        {totalLike === 0 ? "" : totalLike}
                    </p>
                </div>
                <div className="relative cursor-pointer ">
                    {!isDisLike ? (
                        <SlDislike onClick={handleDisLike} size={20} />
                    ) : (
                        <BiSolidDislike size={20} onClick={handleDisLike} />
                    )}

                    <p className="absolute top-[-15px] left-full text-gray-500 text-[14px]">
                        {totalDisLike === 0 ? "" : totalDisLike}
                    </p>
                </div>
                <div>
                    <div className="ml-3 cursor-pointer" onClick={handleReply}>
                        reply
                    </div>
                </div>
            </div>
            <CommentForm
                title={"Reply"}
                isVisible={isVisible}
                showFocus={showFocus}
                setIsVisible={setIsVisible}
            />
        </>
    )
}

export default CommentsContainer
