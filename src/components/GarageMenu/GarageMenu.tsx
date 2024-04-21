import React from 'react';
import DataFrom from '../DataForm/DataForm';
import './GarageMenu.scss';
import { CarI } from '../../interfaces/interface';

interface GarageMenuI {
    selectedCar: CarI | null;
    handleCarUpdate: (updatedCar: CarI) => void;
    handleCarCreate: (newCar: CarI) => void;
}

export default function GarageMenu(props: GarageMenuI) {
    return (
        <div className="content-header__menu">
            <div className="menu-input-forms">
                <DataFrom
                    buttonText="Create"
                    handleSubmit={props.handleCarCreate}
                />
                <DataFrom
                    buttonText="Update"
                    value={props?.selectedCar}
                    handleSubmit={props.handleCarUpdate}
                />
            </div>
        </div>
    );
}
