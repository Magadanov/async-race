import React, { useEffect, useState } from 'react';
import { DataFromI } from '../../interfaces/interface';
import './DataForm.scss';

export default function DataFrom(props: DataFromI) {
    const filedClassName = props.buttonText.toLocaleLowerCase();
    const formClassName = ['input-form'];
    if (props.buttonText === 'Update' && !props.value) {
        formClassName.push('disabled');
    }

    const [name, setName] = useState(props?.value?.name || '');
    const [color, setColor] = useState(props?.value?.color || '#000000');

    useEffect(() => {
        setName(props.value?.name || '');
        setColor(props.value?.color || '#000000');
    }, [props.value]);

    const handleClick = () => {
        if (!name.trim()) return;
        const id = props.value?.id;
        props.handleSubmit({ id, name, color });
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };
    return (
        <div className={formClassName.join(' ')}>
            <input
                className={`input-field input-text input-text__${filedClassName}`}
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <input
                className={`input-field input-color input-color__${filedClassName}`}
                type="color"
                value={color}
                onChange={handleColorChange}
            />
            <button
                type="button"
                className={`btn input-btn input-btn__${filedClassName}`}
                onClick={handleClick}
            >
                {props.buttonText}
            </button>
        </div>
    );
}
