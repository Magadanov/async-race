import React from 'react';
import './Garage.scss';
import Car from '../Car/Car';
import { GarageComponentI } from '../../interfaces/interface';

export default function Garage(props: GarageComponentI) {
    return (
        <div className="garage">
            {props.data.map((car, index) => {
                return (
                    <Car
                        key={index}
                        data={car}
                        handleSelect={props.handleCarSelect}
                        handleDelete={props.handleCarDelete}
                    />
                );
            })}
        </div>
    );
}
