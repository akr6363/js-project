import React from 'react';

export type ManType  = {
    name: string
    age: number
    lessons: Array<{title: string, name: string}>
    address: {
        street: {
            title: string
        }
    }
}

export type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

const Destructuring: React.FC<PropsType> = ({title, man, ...props}) => {

    // const {title, man} = props


    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    );
};

export default Destructuring;