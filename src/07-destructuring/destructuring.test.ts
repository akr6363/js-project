import {ManType} from "./destructuring";

let props: ManType;

beforeEach(()=> {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1', name: 'js'}, {title: '2', name: 'react'}],
        address: {
            street: {
                title: 'lenina street'
            }
        }
    }
})

test('', () => {

    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
})

test('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')

    expect(ls2).toStrictEqual({title: '2', name: 'react'})



})