import {
    addBooks, changeBook,
    changeUserHouse,
    makeHairStyle,
    moveUser,
    upgradeUsersLaptop,
    UserType2,
    UserWithBooksType,
    UserWithLaptopType
} from "./10_01";


test ('reference type test', () => {
    let user: UserType2 ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: "Minsk"
        }
    }

    const cutUser = makeHairStyle(user, 2)
    user = cutUser
    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(16)
})


test ('change address', () => {
    let user: UserWithLaptopType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)

    expect(movedUser.address.title).toBe('Kiev')

})

test ('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        }
    }
    const userWithMacBook = upgradeUsersLaptop(user, 'Macbook')


    expect(user).not.toBe(userWithMacBook)
    expect(user.laptop).not.toBe(userWithMacBook.laptop)
    expect(user.address).toBe(userWithMacBook.address)

    expect(userWithMacBook.laptop.title).toBe('Macbook')

})

test ('change house', () => {
    let user: UserWithLaptopType & UserWithBooksType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        books: ['css', 'js', 'react']
    }
    const userCopy = changeUserHouse(user, 13)


    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)

    expect(userCopy.address.house).toBe(13)

})

test ('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        books: ['css', 'js', 'react']
    }
    const userCopy = addBooks(user, ['ts', 'API'])


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)

    expect(userCopy.books[3]).toBe('ts')
    expect(userCopy.books[4]).toBe('API')

})

test ('update book js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType ={
        name: 'Dimych',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'zenbook'
        },
        books: ['css', 'js', 'react']
    }
    const userCopy = changeBook(user, 'js', 'ts')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)

    expect(userCopy.books[1]).toBe('ts')
    expect(user.books[1]).toBe('js')

})

