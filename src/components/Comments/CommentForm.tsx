/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import axios from "axios"
import {
    Dispatch,
    FormEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react"
import { MdOutlineEmojiEmotions } from "react-icons/md"

const CommentForm = ({
    title = "Comment",
    isVisible = false,
    showFocus = 0,
    setIsVisible,
}: {
    title?: string
    isVisible: boolean
    showFocus?: number
    setIsVisible?: Dispatch<SetStateAction<boolean>>
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const [comment, setComment] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const handleForm = (e: FormEvent) => {
        e.preventDefault()
    }
    const onCancel = (e: FormEvent) => {
        e.preventDefault()
        if (isVisible) setIsVisible?.(false)
        setComment("")
    }
    useEffect(() => {
        let timer: NodeJS.Timeout | null = null
        if (!isFocused && inputRef.current && showFocus) {
            timer = setTimeout(() => inputRef.current?.focus(), 100)
        }
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [showFocus])

    return (
        isVisible && (
            <form onSubmit={handleForm}>
                <div
                    className={` border-gray-500 w-full inputCustom ${isFocused ? "active" : ""}`}
                >
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="placeholder-gray-500] outline-none border-b-[1px] border-b-gray-500 w-full text-gray-400 text-[14px] placeholder:text-[16px]"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        value={comment}
                        autoFocus={showFocus ? true : false}
                        onChange={(e) => setComment(e.target.value)}
                        ref={inputRef}
                    />
                </div>
                <div className="mt-4 flex justify-between items-center w-full">
                    <MdOutlineEmojiEmotions size={30} />

                    <div>
                        <button onClick={onCancel}>Cancel</button>
                        <button type="submit" className="ml-6">
                            {title}
                        </button>
                    </div>
                </div>
            </form>
        )
    )
}

export default CommentForm
