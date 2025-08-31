export function numberOfStars(star: number[] | null | undefined ){
    if(!star || star?.length === 0 || star === undefined ){
        return 0
    }
    
    return star.reduce((total: number, value:number) => total + value ) / star.length
}