import {StudentsType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentsType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function makeStudentActive(s: StudentsType) {
    s.isActive = true
}

export function doesStudentLiveIn(s: StudentsType, cityName: string) {
    return s.address.city.title === cityName
}

export function addMoneyToBudget(build: GovernmentBuildingType, addedBudget: number) {
    build.budget += addedBudget
}

export function repairHouse(house: HouseType) {
    if (!house.repaired) {
        house.repaired = true
    }
}

export function toFireStaff(build: GovernmentBuildingType, numberFireStaff: number) {
    build.staffCount -= numberFireStaff
}

export function toHireStaff(build: GovernmentBuildingType, numberHireStaff: number) {
    build.staffCount += numberHireStaff
}

