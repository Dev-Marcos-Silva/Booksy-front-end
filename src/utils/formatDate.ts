import dayjs from "dayjs"

export function formatDate(date: string | undefined | null ){
    return dayjs(date).format("DD/MM/YYYY")
}