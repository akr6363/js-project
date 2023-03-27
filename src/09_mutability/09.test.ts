function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {
    let user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    let users =[
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Oleg',
            age: 45
        }
    ]

    let admins = users
    admins.push({name: 'Bandugan', age: 10})


    expect(users[2]).toEqual({name: 'Bandugan', age: 10})


})

test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount


    adminsCount = 101


    expect(usersCount).toBe(100)


})

test('reference type test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Oksana',
        age: 17,
        address: address
    }

    address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')

})


test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Oksana',
        age: 17,
        address: address
    }

    const users = [user, user2, {name: 'Anya', age:4, address: address}]

    expect(user.address.title).toBe('Kanary')

})