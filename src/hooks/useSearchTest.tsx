
import { FormEvent, useState } from "react";

const useSearchTest = () => {
    const [test, setTest] = useState<string>("")
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }

    return { onSubmit, test, setTest }


}
export default useSearchTest
