type LocalCityType = {
    title: string
    country: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechnologiesType = {
    id:number
    title: string
}

 export type StudentsType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentsType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id:1,
            title: 'HTML'
        },
        {
            id:2,
            title: 'CSS'
        },
        {
            id:3,
            title: 'JS'
        },
    ]

}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)