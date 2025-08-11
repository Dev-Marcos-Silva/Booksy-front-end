interface StopWatchType{
    days: number
}

export function StopWatch({days}: StopWatchType){
    return(
        <p>
            {days}
        </p>
    )
}