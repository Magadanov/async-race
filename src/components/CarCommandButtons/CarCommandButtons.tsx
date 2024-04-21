import React from 'react';
import './CarCommandButtons.scss';

export default function CarCommandButtons() {
    return (
        <div className="garage-item__command-buttons">
            <div className="action-buttons">
                <button type="button" className="btn select-btn">
                    Select
                </button>
                <button type="button" className="btn delete-btn">
                    Delete
                </button>
            </div>
            <div className="control-buttons">
                <button type="button" className="btn start-btn">
                    A
                </button>
                <button type="button" className="btn stop-btn">
                    B
                </button>
            </div>
        </div>
    );
}
