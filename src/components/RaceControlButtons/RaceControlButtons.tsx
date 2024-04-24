import React from 'react';
import './RaceControlButtons.scss';

interface RaceControlButtonsI {
    onRace: () => void;
}

export default function RaceControlButtons(props: RaceControlButtonsI) {
    return (
        <div className="race-control-buttons">
            <button
                type="button"
                className="btn race-btn"
                onClick={props.onRace}
            >
                Race
            </button>
        </div>
    );
}
