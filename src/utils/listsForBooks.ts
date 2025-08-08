export const yearOfPublication: string[] = []

function generateDates(){
    const currentYear = new Date().getFullYear()
    const startYeat: number = 1980

    let index = startYeat
    while(index <= currentYear){
        yearOfPublication.push(`${index}`)
        index++
    }
}
generateDates()


export const categories = [
    "Romance",
    "Aventura",
    "Drama",
    "Fantasia",
    "Ficção científica",
    "Distopia",
    "Mistério",
    "Suspense",
    "Horror",
    "Ficção histórica",
    "Economia",
    "Mangá",
    "Biografia",
    "Autoajuda",
    "Poesia",
    "Contos",
    "Humor",
    "Thriller psicológico",
    "Literatura clássica",
    "Young Adult (YA)",
    "Infantil",
    "Religião",
    "Filosofia",
    "História",
    "Ciências",
    "Tecnologia",
    "Educação",
    "Política",
    "Arte",
    "Gastronomia",
    "Viagem",
    "Esportes",
    "Quadrinhos",
    "Guias e manuais",
    "Saúde e bem-estar"
]

export const edition = [
    "1ª Edição",
    "2ª Edição",
    "3ª Edição"
]

export const finish = [
    "Capa dura",
    "Brochura",
    "Com orelhas",
    "Plastificada",
    "Verniz localizado",
    "Cola PUR",
    "Costura linha",
    "Papel pólen",
    "Papel offset",
    "Papel couchê"
]



