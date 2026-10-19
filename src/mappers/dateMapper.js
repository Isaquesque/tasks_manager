

function toStorageFormat(date) {
    const strDay = String(date.getDate()).padStart(2, "0")
    const strMonth = String(date.getMonth()).padStart(2, "0")
    const strYear = String(date.getFullYear())

    return strDay+strMonth+strYear
}

function fromStorageFormat(storageDateFormat) {

    const strDay = storageDateFormat.substring(0, 2)
    const strMonth = storageDateFormat.substring(2, 4)
    const strYear = storageDateFormat.substring(4, 8)

    return new Date(strYear, strMonth, strDay)
}

function toDateInputFormat(date){
        const strDay = String(date.getDate()).padStart(2, "0")
        const strMonth = String(date.getMonth() + 1).padStart(2, "0")
        const strYear = String(date.getFullYear())

        return strYear+"-"+strMonth+"-"+strDay
}

function fromDateInputFormat(dateInputFormat) {
    const [year, month, day] = dateInputFormat.split("-")

    const monthIndex = Number(month) - 1

    return new Date(year, monthIndex, day)
}

function toDateViewFormat(date) {
    const strDay = String(date.getDate()).padStart(2, "0")
    const strMonth = String(date.getMonth() + 1).padStart(2, "0")
    const strYear = String(date.getFullYear())

    return strDay+"/"+strMonth+"/"+strYear
}

export const DateMapper = {
    toStorageFormat: toStorageFormat,
    fromStorageFormat: fromStorageFormat,
    toDateInputFormat: toDateInputFormat,
    fromDateInputFormat: fromDateInputFormat,
    toDateViewFormat: toDateViewFormat,
}