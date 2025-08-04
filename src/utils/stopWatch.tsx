interface TypeStopWatch{
    days: number
}

export function StopWatch({days}: TypeStopWatch){
    return(
        <p className="text-center" >
            {days}:00 Horas
        </p>
    )
}