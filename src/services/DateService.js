const months = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dicember']

const DateString = () => {
    const date = new Date()

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

export default DateString