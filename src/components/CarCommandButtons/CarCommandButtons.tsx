import React from 'react';
import './CarCommandButtons.scss';

interface CarCommandButtonsI {
    onSelect: () => void;
    onDelete: () => void;
    onStart: () => void;
    onStop: () => void;
}

export default function CarCommandButtons(props: CarCommandButtonsI) {
    return (
        <div className="garage-item__command-buttons">
            <div className="action-buttons">
                <button
                    type="button"
                    className="btn select-btn"
                    onClick={props.onSelect}
                >
                    Select
                </button>
                <button
                    type="button"
                    className="btn delete-btn"
                    onClick={props.onDelete}
                >
                    Delete
                </button>
            </div>
            <div className="control-buttons">
                <button
                    type="button"
                    className="btn start-btn"
                    onClick={props.onStart}
                >
                    A
                </button>
                <button
                    type="button"
                    className="btn stop-btn"
                    onClick={props.onStop}
                >
                    B
                </button>
            </div>
        </div>
    );
}
