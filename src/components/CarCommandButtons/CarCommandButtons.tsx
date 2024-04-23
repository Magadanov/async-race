import React, { useState } from 'react';
import './CarCommandButtons.scss';

interface CarCommandButtonsI {
    onSelect: () => void;
    onDelete: () => void;
    onStart: () => void;
    onStop: () => void;
}

export default function CarCommandButtons(props: CarCommandButtonsI) {
    const [isStartClicked, setIsStartClicked] = useState(false);
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
                    className={`btn start-btn ${isStartClicked ? 'disabled' : ''}`}
                    onClick={() => {
                        setIsStartClicked(true);
                        props.onStart();
                    }}
                >
                    A
                </button>
                <button
                    type="button"
                    className={`btn stop-btn ${!isStartClicked ? 'disabled' : ''}`}
                    onClick={() => {
                        setIsStartClicked(false);
                        props.onStop();
                    }}
                >
                    B
                </button>
            </div>
        </div>
    );
}
