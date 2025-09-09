interface LoadingType{
   size: number
}


export function Loading({size}: LoadingType){
    return(
        <div className="w-full h-full flex justify-center items-center" >
            <div className={`animate-spin w-${size} h-${size} rounded-full border-${size/2} border-t-but-100 border-bg-100`}>

            </div>
        </div>
    )
}