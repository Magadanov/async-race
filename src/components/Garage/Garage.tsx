import React, { useState } from 'react';
import './Garage.scss';
import Car from '../Car/Car';
import { GarageComponentI } from '../../interfaces/interface';
import RaceControlButtons from '../RaceControlButtons/RaceControlButtons';

export default function Garage(props: GarageComponentI) {
    const [isRace, setIsRace] = useState(false);
    const onRace = () => {
        setIsRace(true);
    };
    const onReset = () => {
        setIsRace(false);
    };
    return (
        <div className="garage-container">
            <RaceControlButtons onRace={onRace} onReset={onReset} />
            <div className="garage">
                {props.data.map((car, index) => {
                    return (
                        <Car
                            key={index}
                            data={car}
                            handleSelect={props.handleCarSelect}
                            handleDelete={props.handleCarDelete}
                            isRace={isRace}
                        />
                    );
                })}
            </div>
        </div>
    );
}
