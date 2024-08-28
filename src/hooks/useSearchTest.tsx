import { FormEvent, useState } from "react"

const useSearchTest = () => {
    const [searchInput, setSearchInput] = useState<string>("")
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return { onSubmit, searchInput, setSearchInput }
}
export default useSearchTest
