import exp from "constants";


type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType = {}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '11201': {id: 11201, name: 'Katya'},
        '10441': {id: 10441, name: 'Vova'},
        '1': {id: 1, name: 'Andrey'},
    }
})


test('should update corresponding user from obj', () => {

    users[1].name = 'Anya'

    expect(users['1']).toStrictEqual({id: 1, name: 'Anya'})
})


test('should delete corresponding user from obj', () => {

    delete users[1]

    expect(users['1']).toBeUndefined()
})