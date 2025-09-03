import dayjs from "dayjs"

export function formatDate(date: string | undefined ){
    return dayjs(date).format("DD/MM/YYYY")
}