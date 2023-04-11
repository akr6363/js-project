import exp from "constants";

export type UserType2 = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType2 & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType2 & {
    books: Array<string>
}


export function makeHairStyle(u: UserType2, power: number) {
    const copy = {
        ...u,
        hair: u.hair/ power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            title: city
        }
    }

}

export function upgradeUsersLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: newLaptop
        }
    }

}

export function changeUserHouse(u: UserWithLaptopType & UserWithBooksType, newHouse: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: newHouse
        }
    }

}

export function addBooks(u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
    return {
        ...u,
        books: [
            ...u.books,
            ...newBooks
        ]
    }
}

export function changeBook(u: UserWithLaptopType & UserWithBooksType, changeBook: string,  newBook: string) {
    return {
        ...u,
        books: u.books.map(book => book === changeBook ? newBook : book)
    }
}