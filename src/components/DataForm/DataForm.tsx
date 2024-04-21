import React from 'react';
import { DataFromI } from '../../interfaces/interface';
import './DataForm.scss';

export default function DataFrom(props: DataFromI) {
    const className = props.buttonText.toLocaleLowerCase();
    return (
        <div className="input-form">
            <input
                className={`input-field input-text input-text__${className}`}
                type="text"
                defaultValue={props?.value?.name}
            />
            <input
                className={`input-field input-color input-color__${className}`}
                type="color"
                defaultValue={props?.value?.color}
            />
            <button
                type="button"
                className={`btn input-btn input-btn__${className}`}
                onClick={props.handleSubmit}
            >
                {props.buttonText}
            </button>
        </div>
    );
}
