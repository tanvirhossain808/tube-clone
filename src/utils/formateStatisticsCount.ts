function formateStatisticsCount(
    number: number,
    type: string = "subscriber"
): string | null {
    if (!number) return null
    if (number >= 1000000) {
        return (
            formate(number).toFixed(1) +
            `${type === "views" ? "M views" : "M Subscribers"}`
        )
    } else if (number >= 1000) {
        return (
            formate(number).toFixed(1) +
            `${type === "views" ? "K views" : "K Subscribers"}`
        )
    } else {
        return number + `${type === "views" ? "views" : "Subscribers"}`
    }
}

export default formateStatisticsCount

const formate = (number: number): number => {
    if (number >= 1000000) {
        return number / 1000000
    } else {
        return number / 1000
    }
}
