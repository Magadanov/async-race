import React from 'react';
import { WinnerCarI } from '../../interfaces/interface';
import './WinnerModalWindow.scss';

export default function WinnerModalWindow(props: WinnerCarI) {
    return (
        <div className="winner-modal-window">
            <h2 className="winner-modal-window__title">Winner</h2>
            <h4 className="winner-modal-window__car-name">{props.name}</h4>
            <h4 className="winner-modal-window__car-time">
                Time {props.time} s
            </h4>
        </div>
    );
}
