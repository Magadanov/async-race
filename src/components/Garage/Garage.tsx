import React, { useState } from 'react';
import './Garage.scss';
import Car from '../Car/Car';
import { GarageComponentI, WinnerCarI } from '../../interfaces/interface';
import RaceControlButtons from '../RaceControlButtons/RaceControlButtons';
import WinnerModalWindow from '../WinnerModalWindow/WinnerModalWindow';

export default function Garage(props: GarageComponentI) {
    const [isRace, setIsRace] = useState(false);
    const [winnerCar, setWinnerCar] = useState<WinnerCarI[]>([]);
    const [winnerCarData] = winnerCar;
    const onRace = () => {
        setIsRace(true);
    };

    const onReset = () => {
        setIsRace(false);
        setWinnerCar([]);
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
                            setWinnerCar={setWinnerCar}
                        />
                    );
                })}
            </div>
            {winnerCar.length ? (
                <WinnerModalWindow
                    id={winnerCarData.id}
                    name={winnerCarData.name}
                    time={winnerCarData.time}
                />
            ) : null}
        </div>
    );
}
