import { ButtonHTMLAttributes, FormEvent, useState } from "react"
import { MdOutlineEmojiEmotions } from "react-icons/md"

const CommentForm = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [comment, setComment] = useState("")
    const handleForm = (e: FormEvent) => {
        e.preventDefault()
    }
    const onCancel = (e: FormEvent) => {
        e.preventDefault()
        setComment("")
    }
    return (
        <form onSubmit={handleForm}>
            <div
                className={` border-gray-500 w-full inputCustom ${isFocused && "active"}`}
            >
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="placeholder-gray-500] outline-none border-b-[1px] border-b-gray-500 w-full text-gray-400 text-[14px] placeholder:text-[16px]"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <div className="mt-4 flex justify-between items-center w-full">
                <MdOutlineEmojiEmotions size={30} />

                <div>
                    <button onClick={onCancel}>Cancel</button>
                    <button type="submit" className="ml-6">
                        Comment
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm
