import React from 'react';
import './Car.scss';
import { CarComponentI } from '../../interfaces/interface';
import CarCommandButtons from '../CarCommandButtons/CarCommandButtons';
import { PiCarProfileFill } from 'react-icons/pi';
import { GiFinishLine } from 'react-icons/gi';

export default function Car(props: CarComponentI) {
    const { color } = props.data;
    const onSelect = () => {
        props.handleSelect(props.data);
    };

    const onDelete = () => {
        props.handleDelete(props.data.id!);
    };

    return (
        <div className="garage-item">
            <CarCommandButtons onSelect={onSelect} onDelete={onDelete} />
            <div className="garage-item__car-race-container">
                <PiCarProfileFill className="car-icon" color={color} />
                <GiFinishLine className="finish-icon" />
            </div>
        </div>
    );
}
