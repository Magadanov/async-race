import React, { useRef } from 'react';
import './Car.scss';
import { CarComponentI } from '../../interfaces/interface';
import CarCommandButtons from '../CarCommandButtons/CarCommandButtons';
import { PiCarProfileFill } from 'react-icons/pi';
import { GiFinishLine } from 'react-icons/gi';
import startEngine from '../../utils/startEngine';

export default function Car(props: CarComponentI) {
    const { id, color } = props.data;
    const raceContainerRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLDivElement>(null);
    const onSelect = () => {
        props.handleSelect(props.data);
    };

    const onDelete = () => {
        props.handleDelete(props.data.id!);
    };

    const onStart = () => {
        startEngine(id!, raceContainerRef.current!, carRef.current!);
    };

    const onStop = () => {
        console.log('stop');
    };

    return (
        <div className="garage-item">
            <CarCommandButtons
                onSelect={onSelect}
                onDelete={onDelete}
                onStart={onStart}
                onStop={onStop}
            />
            <div
                className="garage-item__car-race-container"
                ref={raceContainerRef}
            >
                <div className="car" ref={carRef}>
                    <PiCarProfileFill className="car-icon" color={color} />
                </div>

                <GiFinishLine className="finish-icon" />
            </div>
        </div>
    );
}
