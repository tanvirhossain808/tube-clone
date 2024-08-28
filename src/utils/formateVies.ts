function formatViews(number: number): string {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M views';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K views';
    } else {
        return number + ' views';
    }
}
// Outputs: "1.2M views"
export default formatViews