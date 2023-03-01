import {StudentsType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentsType

beforeEach(() => {
    student = {
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
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            },
        ]
    }
})

test("new tech skill chould be added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student shoulde be made active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("does student live in city?", () => {
    let result1 = doesStudentLiveIn(student, "Moskow")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})

