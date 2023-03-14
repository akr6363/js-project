

// export const usersObj = {
//     '0': 'Dimych',
//     '1': 'Katya',
//     '2': 'Vova',
//     '3': 'Andrey'
// }

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '11201': {id: 11201, name: 'Katya'},
    '10441': {id: 10441, name: 'Vova'},
    '1': {id: 1, name: 'Andrey'},
}

// users[1]
let user = {id: 100500, name: 'Igor'}
users[user.id] = user

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 11201, name: 'Katya'},
    {id: 10441, name: 'Vova'},
    {id: 1, name: 'Andrey'},
]

usersArray.find(u => u.id === 1)